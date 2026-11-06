# Live-site re-sync, November 2026

Owner.com changed pistachiocafe.com after the SEO report was shared with them, so the whole clone was re-captured and rebuilt (commit `affc160`, deployed to the Render preview at https://pistachio-cafe-preview.onrender.com, which stays `noindex`).

## What changed on the live site (as captured 2026-11-06)
- 100 real pages (was 20): home, `/menu`, `/menu/911-whalley-ave`, `/menu/1245-chapel-st`, both location pages, catering, story, careers, terms, accessibility, `/page/*` (breakfast, brunch, birthdays--space-rentals, proudly-serving-new-haven, press, contact-us--locations, halal-at-pistachio), 22 `/places/*` neighbourhood pages, about 56 `/tags/*` pages.
- Redirects (13): `/about`→`/story` (308), `/privacy`→`/terms` (308), `/contact`→`/terms#contact` (302), `/locations`→`/` (307), `/rewards`→`/?legacy-redirect=rewards` (307), `/places/new-haven`→`/911-whalley-ave` (308), and `/places/{bethany,branford,cheshire,fair-haven,guilford,milford,north-haven}`→`/` (307).
- `/events` is now a plain-text 404 ("Not found"); other unknown paths return a styled HTML 404. `/places` itself is a 404. `/press-1/f/*` links 404 on live too.
- New static files: robots.txt (with Content-Signal and a SemrushBot rule), sitemap.xml, llms.txt, agents.md, `.well-known/poppy.json`.
- New hashed `/_astro` bundles, new funnel images, new pdf.js `.mjs`/`.wasm` files.

## How the clone works now
1. `scripts/discover_routes.js` finds routes from the sitemap and links (`live_source/routes.json`).
2. `scripts/capture_site.js` loads each route in a real Chrome (Cloudflare blocks plain HTTP clients), saves the raw HTML of every 200 page to `live_source/raw/`, and records redirects and 404s in `live_source/manifest.json`.
3. `scripts/capture_static.js` saves robots/sitemap/llms/agents/poppy and the 404 body into `content/static/`.
4. `scripts/build_site.py` writes `content/docs/*.html` (the live documents with trackers stripped, internal `<a>` links made relative, favicons/PDFs/maps pointed at local copies) and `content/manifest.json`.
5. `app/[[...slug]]/route.ts` serves pages, redirects, the 404 and static files. With `PREVIEW_NOINDEX=1` it serves a disallow-all robots.txt and adds `X-Robots-Tag: noindex, nofollow`.
6. `mirror_astro_assets.js`, `mirror_media.js` and `optimize_originals.js` self-host scripts, images, videos, maps and PDFs. `/pluto-images` is resized on demand from `media/originals`.

Removed: `components/LivePage.tsx`, `scripts/build_from_live.py`, the per-route `app/**/page.tsx`, `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`.

## Verification
- Every route was fetched from a local production build and compared with its generated document: 0 mismatches, and all 13 redirects, the 404s and static files matched live status codes and content types.
- `scripts/capture_fidelity.js` + `scripts/compare_fidelity.js` compare rendered text, computed fonts/sizes/colours, images, links and page heights against live at 1440px and 390px. Result after the fixes: 86 of 199 captures identical (84 in the full re-run, plus brunch desktop and mobile re-checked on a fresh server). Every remaining difference falls in the known categories below: menu pages (ordering backend), home (intermittent app block), and `/tags/*` pages whose "menu" links and featured item are chosen by Owner's browser JS and differ per visit. Fixes made after the first run (82/199): funnel images (14 broken on birthdays page), pdf.js files (brunch "Failed to load PDF"), self-hosted favicons.
- Known differences that are not clone defects: (a) menu links that Owner's JS rewrites from its ordering backend (e.g. `/menu` → `/menu/911-whalley-ave`), (b) the ordering widgets (Start order bar, pickup/closing status), (c) the footer "popular items" keyword list and matching FAQ answer, reshuffled by the live server on every request, (d) an "app download" block that appears intermittently on live and is not in the server HTML.

## Not done yet
- Square ordering replacing Owner's backend; Owner's Stripe/Maps keys in mirrored JS must be replaced; JSON-LD image URLs still point at static-content.owner.com; do not cancel Owner.com until testing is complete.
- Fix-list SEO items (Chapel St title/H1/body, meta descriptions, hours, JSON-LD) are carried over exactly as Owner now serves them; they are tracked in the Google Ads project, not changed here.
