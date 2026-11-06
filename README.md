# Pistachio Cafe & Pistachio Cafe 2 — Headless Next.js + Square POS Platform

> **100% Exact Live DOM Clone & Enterprise Square POS Integration**  
> Replacing Owner.com ($500/mo SaaS) with an in-house, zero-downtime, search-dominant digital commerce ecosystem for Pistachio Cafe and Pistachio Cafe 2.

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2.35-black.svg?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Square POS](https://img.shields.io/badge/Square-API_v2-006AFF.svg?style=flat&logo=square)](https://developer.squareup.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

---

## 1. Executive Summary & Project Mandate

**Pistachio Cafe** is a premier artisan cafe, bakery, and cultural institution in New Haven, Connecticut, founded and operated by Syrian artist and architect **Mohamad Hafez**. The brand operates two flagship locations:
* **Location 1 (Westville):** 911 Whalley Ave, New Haven, CT 06515 (Place ID: `ChIJ3WBON5DZ54kRLT0rDMisS9I`)
* **Location 2 (Downtown / Dwight):** 1245 Chapel St, New Haven, CT 06511 (Place ID: `ChIJBdtHC6nZ54kRkk2pJiWGxeQ`)

### The Crisis & Strategic Shift
For over a year, Pistachio Cafe utilized **Owner.com** to host `https://pistachiocafe.com/` and their mobile application at a cost of **$500 per month ($6,000 annually)**. Independent audits confirmed that Owner.com's closed-garden platform had severely degraded the cafe's organic business:
* **Branded Dependency:** 91% of search traffic was already searching for "Pistachio Cafe" by name; only 9% came from non-branded discovery.
* **Map Pack Invisibility:** Location 2 (Chapel St) was completely invisible (0% visibility) in Google Local 3-Packs for "breakfast", "coffee", and "brunch".
* **Revenue Per Visit:** Dropped to **$0.51** (over 10x worse than the industry peer median of **$5.26**), with visit-to-order conversion collapsing to **1%** (vs. **12%** peer median).
* **The "Hostage" Dilemma:** Canceling Owner.com would immediately shut off the customer ordering site and app, risking severe revenue disruption.

### The Objective
Engineer an in-house, high-performance **Headless Next.js 14 App Router** web platform backed natively by **Square POS**, replicating 100% of the visual layout, typography, colors, and user experience of `https://pistachiocafe.com/` with zero customer disruption, terminating the $500/month fee while restoring local SEO dominance.

---

## 2. Comprehensive Documentation Suite

For detailed audits, raw client correspondence, architectural blueprints, and runbooks, refer to the exhaustive documentation suite:

* [**Client Record & Full Communications Transcript (`docs/CLIENT_RECORD_AND_COMMUNICATIONS.md`)**](./docs/CLIENT_RECORD_AND_COMMUNICATIONS.md)  
  *Verbatim transcripts of all emails, WhatsApp/SMS messages between Saif Uddin and Mohamad Hafez, GoDaddy/Square account access handovers, and the Tuesday Social Media Manager transition protocol.*

* [**Client Pain Points & Binding Requirements (`docs/CLIENT_PAIN_POINTS_AND_REQUIREMENTS.md`)**](./docs/CLIENT_PAIN_POINTS_AND_REQUIREMENTS.md)  
  *Detailed breakdown of the $500/mo SaaS drain, platform lock-in risks, historical GoDaddy + Square operations, Square Developer OAuth credentials protocol, and non-negotiable project requirements.*

* [**Technical SEO, Local Search & Audit Archive (`docs/TECHNICAL_SEO_AND_AUDIT_ARCHIVE.md`)**](./docs/TECHNICAL_SEO_AND_AUDIT_ARCHIVE.md)  
  *Full technical data from Owner.com's 12-page report, LocalFalcon 7x7 geo-grid scan, Jumper Local $299 keyword tracking, live Google Search Console API audit, and code-level "smoking guns" (Location 2 Westville copy-paste defect, missing H1s, 20+ thin doorway pages).*

* [**System Architecture & DOM Fidelity Specifications (`docs/SYSTEM_ARCHITECTURE_AND_FIDELITY_SPEC.md`)**](./docs/SYSTEM_ARCHITECTURE_AND_FIDELITY_SPEC.md)  
  *Headless Next.js 14 architecture, 25-route inventory, Square REST API v2 integration, and split kitchen ticket routing plan (its rendering/media sections are superseded — see §3–5 below).*

* [**Live-site Re-sync Log, Nov 2026 (`docs/LIVE_SITE_RESYNC_2026-11.md`)**](./docs/LIVE_SITE_RESYNC_2026-11.md)  
  *What Owner changed, how the 100-page clone is captured, built, served and verified, known differences and open items.*

* [**Zero-Downtime Deployment & DNS Cutover Runbook (`docs/DEPLOYMENT_AND_MIGRATION_RUNBOOK.md`)**](./docs/DEPLOYMENT_AND_MIGRATION_RUNBOOK.md)  
  *Step-by-step GoDaddy DNS cutover instructions, hardware kitchen printer verification protocol, Google Search Console sitemap submission, and formal Owner.com contract cancellation notice.*

---

## 3. Technology Stack

* **Framework:** Next.js 14 (App Router), TypeScript
* **Page rendering:** every page is the live site's own server HTML served verbatim by one catch-all route handler (`app/[[...slug]]/route.ts`) from `content/docs/`, generated from captures in `live_source/raw/` by `scripts/build_site.py`. Fonts, styles and layout are therefore the live site's exact Mercury UI output (Poppins headings, system-font body).
* **Client behaviour:** the live site's own Astro component scripts (navigation, galleries, reviews, hours, menu island, PDF viewer) are mirrored into `public/_astro/`. Third-party trackers (GTM/GA4, Datadog, Cloudflare beacon, Owner analytics) are stripped.
* **Media (self-hosted, zero Owner.com runtime dependency):**
  * `/pluto-images/*` - `app/pluto-images/[...path]/route.ts` resizes originals from `media/originals/` (sharp) with the same `w`/`h`/`dpr`/`fit`/`format` parameters Owner's CDN used, cached in `.cache/`
  * `/pluto-videos/*`, `/static-maps/*`, `/images/*`, `/documents/*.pdf`, `/pdf.worker.min.js` - static files in `public/`
* **Commerce & Payments (next phase):** Square APIs & Web Payments SDK (`lib/square.ts`)
* **Structured Data:** the live site's JSON-LD (`structured-location-data`) is carried over verbatim

---

## 4. Route Directory

`live_source/manifest.json` (written by `scripts/capture_site.js`) lists every live route: 100 real pages (home, menu, per-location menus, both locations, catering, story, careers, `/page/*`, 22 `/places/*` neighbourhood pages, ~56 `/tags/*` pages, terms, accessibility), 13 redirects (e.g. `/about`→`/story`, `/privacy`→`/terms`, `/locations`→`/`, `/places/new-haven`→`/911-whalley-ave`) and the styled 404. `/events` is a plain-text 404 on live and here. `robots.txt`, `sitemap.xml`, `llms.txt`, `agents.md` and `.well-known/poppy.json` are captured in `content/static/`. With `PREVIEW_NOINDEX=1` robots.txt disallows everything and every response carries `X-Robots-Tag: noindex, nofollow`.

### Re-syncing with the live site

```bash
node scripts/discover_routes.js                    # find routes from sitemap + links
node scripts/capture_site.js live_source/raw       # raw HTML, redirects, 404s -> manifest.json
node scripts/capture_static.js                     # robots/sitemap/llms/agents/poppy + 404 body
python scripts/build_site.py                       # content/docs/*.html + content/manifest.json
node scripts/mirror_astro_assets.js                # new /_astro and /images files
node scripts/mirror_media.js                       # new images/videos/maps
node scripts/optimize_originals.js                 # convert new originals to WebP
```

---

## 5. Fidelity Verification

`scripts/capture_fidelity.js` renders every route on both origins (desktop 1440px and mobile 390px) and records every visible text node with its computed font family/size/weight/line-height/colour/transform, every image (and whether it failed to load), and section geometry. `scripts/geometry_diff.js` compares every element's box and key styles by DOM path.

**Earlier results (2026-09-29, 20 routes; the 2026-11 re-sync covers all 100 pages and is compared with `scripts/compare_fidelity.js`; remaining differences are live-only ordering-backend links, intermittent live variants and the shuffled keyword list), all 20 routes × desktop 1440px + mobile 390px):**

* **Page heights:** identical to the pixel on all 40 route/viewport combinations, except the two menu pages on mobile (see below).
* **Broken images:** 0 on every page (all media self-hosted).
* **Text + computed style match 100%** on 15 content pages at both widths, and element-by-element geometry is identical (0 differing elements) on: story, careers, events, catering, brunch, press, contact, birthdays/space rentals, proudly-serving, terms, accessibility (breakfast/halal/privacy differ only in a serialized `auto`-margin string; boxes identical).
* **Home, /locations, /911-whalley-ave, /1245-chapel-st:** only the footer "popular items" keyword list and the matching FAQ answer differ. The live server re-shuffles these words on every cache fill (two consecutive live captures differ from each other the same way), so no fixed copy can match a given visit.
* **Menu pages:** all 126/138 items, photos, prices and categories match. Differences are live ordering state that depends on Owner.com's ordering backend (guest session/GraphQL APIs): the mobile "Start order / You're saving 10%+" bar, pickup-time selector and open/closing status text. These are replaced by the Square ordering integration rather than emulated.


---

## 6. Quick Start & Local Development

### 6.1 Prerequisites
* Node.js 18.17+ or Node.js 20+
* npm or pnpm

### 6.2 Environment Setup
Copy the sample environment file:
```bash
cp .env.example .env.local
```

Configure your Square POS credentials inside `.env.local`:
```env
# Square POS API Credentials
SQUARE_ACCESS_TOKEN="sq0atp-..."
SQUARE_APPLICATION_ID="sq0idp-80KYfCaGhvvXVFZDJcR-2w"
SQUARE_ENVIRONMENT="production"

# Square Location IDs
SQUARE_LOCATION_WHALLEY="L..."
SQUARE_LOCATION_CHAPEL="L..."

# Google Calendar API (Space Rentals)
GOOGLE_CALENDAR_API_KEY=""
GOOGLE_CALENDAR_ID=""
```

### 6.3 Installation & Local Server
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6.4 Production Build
```bash
# Compile and prerender all 25 static routes
npm run build

# Start production server
npm run start
```

---

## 7. Operational Transition Runbook Summary

1. **Gate 1: Verification:** Run `npm run build` (25/25 static routes pass). Confirm Monday Square OAuth elevation.
2. **Gate 2: Kitchen Printer Test:** Dispatch $1 test orders to Whalley Ave and Chapel St; confirm physical ticket printing.
3. **Gate 3: GoDaddy DNS Cutover:** Repoint `pistachiocafe.com` A and CNAME records to Vercel/Cloudflare Edge.
4. **Gate 4: SEO Activation:** Submit dynamic `sitemap.xml` to Google Search Console; verify JSON-LD Rich Results.
5. **Gate 5: Termination:** Send formal cancellation notice to Owner.com to eliminate the $500/month recurring subscription.

---

## 8. Maintainer & Copyright

* **Architect & Developer:** Saif Uddin (`saif@pistachiocafe.com`)
* **Client / Owner:** Mohamad Hafez (Pistachio Cafe & Pistachio Cafe 2)
* **Copyright:** © 2026 Pistachio Cafe LLC. All Rights Reserved.
