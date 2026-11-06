"""Build content/docs/*.html (whole live documents, trackers stripped) from live_source/raw.

Every captured page is served byte-for-byte as the live server sent it (head, JSON-LD,
meta tags, styles, scripts, body) by app/[[...slug]]/route.ts. Only these edits are made:
  * third-party trackers removed (GTM/GA4, Datadog, Owner analytics, Cloudflare beacon, ...)
  * <a href="https://pistachiocafe.com/x"> made relative; canonical/og/JSON-LD URLs untouched
  * Owner-hosted PDFs and static maps point at the self-hosted copies in public/
Usage: python scripts/build_site.py
"""
import json, os, re, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "live_source", "raw")
OUT = os.path.join(ROOT, "content", "docs")

DROP_SCRIPT = [
    "googletagmanager", "gtag(", "dataLayer", "ga4-loader", "gtm-loader", "partytown",
    "OwnerAnalytics", "DatadogRum", "includeLogsJson", "cloudflareinsights", "mercuryUTM",
    "UberHandoffCapture", "window.HTMLCollection = window.HTMLCollection",
]
DROP_LINK = ["googletagmanager", "google-analytics", "datadoghq", "cloudflareinsights", "partytown"]


def slug(route):
    return "home" if route == "/" else route[1:].replace("/", "__")


def clean(html):
    html = re.sub(r"<script\b[^>]*>.*?</script>",
                  lambda m: "" if any(p in m.group(0) for p in DROP_SCRIPT) else m.group(0), html, flags=re.S)
    html = re.sub(r"<noscript>\s*<iframe[^>]*googletagmanager.*?</noscript>", "", html, flags=re.S)
    html = re.sub(r"<link\b[^>]*>", lambda m: "" if any(p in m.group(0) for p in DROP_LINK) else m.group(0), html)
    html = re.sub(r'(<a\b[^>]*?\shref=")https://pistachiocafe\.com(/[^"]*)?"',
                  lambda m: '%s%s"' % (m.group(1), m.group(2) or "/"), html)
    html = re.sub(r"<link[^>]*\srel=\"(?:icon|shortcut icon|apple-touch-icon)\"[^>]*>",
                  lambda m: m.group(0).replace("https://pistachiocafe.com/pluto-images/", "/pluto-images/"), html)
    html = re.sub(r"https://static-content\.owner\.com/document/([0-9a-f-]+\.pdf)", r"/documents/\1", html)
    return re.sub(r"/static-maps/map\.jpg\?lat=([-\d.]+)&(?:amp;)?lon=([-\d.]+)[^\"'\s)]*",
                  r"/static-maps/map_\1_\2.jpg", html)


def main():
    manifest = json.load(open(os.path.join(ROOT, "live_source", "manifest.json")))
    shutil.rmtree(OUT, ignore_errors=True)
    os.makedirs(OUT)
    for route in manifest["pages"]:
        html = open(os.path.join(RAW, slug(route) + ".html"), encoding="utf-8").read()
        open(os.path.join(OUT, slug(route) + ".html"), "w", encoding="utf-8", newline="").write(clean(html))
    # The styled 404 page the live site serves for unknown paths.
    nf = "does-not-exist-404-probe"
    html = open(os.path.join(ROOT, "content", "static", nf), encoding="utf-8").read()
    open(os.path.join(OUT, "_404.html"), "w", encoding="utf-8", newline="").write(clean(html))
    for r, v in manifest["redirects"].items():
        v["location"] = re.sub(r"^https://pistachiocafe\.com", "", v["location"]) or "/"
    out = {"pages": [r for r in manifest["pages"]], "redirects": manifest["redirects"]}
    json.dump(out, open(os.path.join(ROOT, "content", "manifest.json"), "w"), indent=1)
    print("built", len(manifest["pages"]), "pages,", len(manifest["redirects"]), "redirects")


if __name__ == "__main__":
    main()
