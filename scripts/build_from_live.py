"""Generate the Next.js routes from the raw live HTML in live_source/raw/.

For each captured route this writes:
  content/live/<slug>.html   head styles + kept head scripts + cleaned <body> markup
  app/<route>/page.tsx       metadata copied from the live <head> + <LivePage slug=... />

Everything is copied verbatim except third-party tracking/analytics scripts,
which are stripped so the clone does not report into Owner.com's accounts.

Usage: python scripts/build_from_live.py
"""
import json
import os
import re
from html import unescape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "live_source", "raw")
OUT = os.path.join(ROOT, "content", "live")
ORIGIN = "https://pistachiocafe.com"

ROUTES = [
    "/", "/locations", "/menu", "/1245-chapel-st", "/911-whalley-ave", "/menu/1245-chapel-st",
    "/catering", "/page/breakfast", "/page/brunch", "/page/birthdays--space-rentals", "/story",
    "/page/proudly-serving-new-haven", "/events", "/careers", "/page/press",
    "/page/contact-us--locations", "/terms", "/privacy", "/accessibility", "/page/halal-at-pistachio",
]

# Scripts matching any of these (in the tag attributes or body) are trackers.
DROP_SCRIPT = [
    "googletagmanager", "gtag(", "dataLayer", "ga4-loader", "gtm-loader", "partytown",
    "OwnerAnalytics", "DatadogRum", "includeLogsJson", "cloudflareinsights", "mercuryUTM",
    "UberHandoffCapture", "window.HTMLCollection = window.HTMLCollection",
]


def slug(route):
    return "home" if route == "/" else route[1:].replace("/", "__")


def keep_script(tag):
    return not any(p in tag for p in DROP_SCRIPT)


def clean_scripts(markup):
    return re.sub(
        r"<script\b[^>]*>.*?</script>",
        lambda m: m.group(0) if keep_script(m.group(0)) else "",
        markup, flags=re.S,
    )


def localize_links(markup):
    # Internal absolute links -> relative so navigation stays on this host.
    # Canonical/og URLs live in metadata, not in this markup.
    markup = re.sub(r'(href|action)="https://pistachiocafe\.com(/[^"]*)?"',
                    lambda m: '%s="%s"' % (m.group(1), m.group(2) or "/"), markup)
    # Owner-hosted PDF menus are mirrored into public/documents/.
    markup = re.sub(r'https://static-content\.owner\.com/document/([0-9a-f-]+\.pdf)', r'/documents/\1', markup)
    # Static map tiles are mirrored by scripts/mirror_media.js as map_<lat>_<lon>.jpg.
    return re.sub(r'/static-maps/map\.jpg\?lat=([-\d.]+)&(?:amp;)?lon=([-\d.]+)[^"\'\s)]*',
                  r'/static-maps/map_\1_\2.jpg', markup)


def meta(head, attr, name):
    m = re.search(r'<meta %s="%s" content="([^"]*)"' % (attr, re.escape(name)), head)
    return unescape(m.group(1)) if m else None


def absolute(url):
    return url if not url or url.startswith("http") else ORIGIN + url


def build(route):
    html = open(os.path.join(RAW, slug(route) + ".html"), encoding="utf-8").read()
    head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
    body = re.search(r"<body[^>]*>(.*)</body>", html, re.S).group(1)

    styles = "".join(re.findall(r"<style\b[^>]*>.*?</style>", head, re.S))
    head_scripts = clean_scripts("".join(re.findall(r"<script\b[^>]*>.*?</script>", head, re.S)))
    body = re.sub(r"<noscript>\s*<iframe[^>]*googletagmanager.*?</noscript>", "", body, flags=re.S)
    body = clean_scripts(body)
    markup = localize_links(head_scripts + styles + body)

    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, slug(route) + ".html"), "w", encoding="utf-8") as f:
        f.write(markup)

    title = unescape(re.search(r"<title>(.*?)</title>", head, re.S).group(1))
    canonical = re.search(r'<link rel="canonical" href="([^"]*)"', head)
    robots = meta(head, "name", "robots")
    md = {
        "title": {"absolute": title},
        "description": meta(head, "name", "description"),
        "alternates": {"canonical": canonical.group(1)} if canonical else None,
        "robots": robots,
        "openGraph": {
            "title": meta(head, "property", "og:title"),
            "description": meta(head, "property", "og:description"),
            "url": meta(head, "property", "og:url"),
            "type": meta(head, "property", "og:type") or "website",
            "images": [{"url": absolute(meta(head, "property", "og:image")),
                        "alt": meta(head, "property", "og:image:alt")}]
            if meta(head, "property", "og:image") else None,
        },
        "twitter": {
            "card": meta(head, "name", "twitter:card"),
            "title": meta(head, "name", "twitter:title"),
            "description": meta(head, "name", "twitter:description"),
            "images": [absolute(meta(head, "name", "twitter:image"))]
            if meta(head, "name", "twitter:image") else None,
        },
    }
    md = json.loads(json.dumps(md), object_hook=lambda d: {k: v for k, v in d.items() if v is not None})

    page_dir = os.path.join(ROOT, "app", *[p for p in route.split("/") if p])
    os.makedirs(page_dir, exist_ok=True)
    with open(os.path.join(page_dir, "page.tsx"), "w", encoding="utf-8") as f:
        f.write(
            "// Generated by scripts/build_from_live.py from the live pistachiocafe.com%s markup.\n"
            "import type { Metadata } from \"next\";\n"
            "import LivePage from \"@/components/LivePage\";\n\n"
            "export const metadata: Metadata = %s;\n\n"
            "export default function Page() {\n"
            "  return <LivePage slug=\"%s\" />;\n"
            "}\n" % (route, json.dumps(md, indent=2, ensure_ascii=False), slug(route))
        )
    print("%-34s %8d bytes  %s" % (route, len(markup), title))


if __name__ == "__main__":
    for r in ROUTES:
        build(r)
