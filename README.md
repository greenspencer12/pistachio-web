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
  *Headless Next.js 14 architecture, 25-route inventory, Square REST API v2 integration, split kitchen ticket routing, 36 authentic Pluto CDN image UUIDs, and automated DOM verification audit.*

* [**Zero-Downtime Deployment & DNS Cutover Runbook (`docs/DEPLOYMENT_AND_MIGRATION_RUNBOOK.md`)**](./docs/DEPLOYMENT_AND_MIGRATION_RUNBOOK.md)  
  *Step-by-step GoDaddy DNS cutover instructions, hardware kitchen printer verification protocol, Google Search Console sitemap submission, and formal Owner.com contract cancellation notice.*

---

## 3. Technology Stack

* **Framework:** Next.js 14.2.35 (App Router, Server & Client Components)
* **Language:** TypeScript 5.x
* **Styling Engine:** Tailwind CSS 3.4 + Authentic Mercury UI CSS Bundle (`public/mercury.css`)
* **Typography:** Google Fonts `Poppins` (Weights 400, 500, 600, 700)
* **Commerce & Payments:** Square Node.js SDK (`square` v37+) & Square Web Payments SDK
* **Hardware Integration:** Dual-store split kitchen ticket routing (Whalley Ave vs Chapel St)
* **Calendar Integration:** Google Calendar API / Calendly event reservations
* **Asset CDN:** Authentic Pluto CDN (`https://pluto.ownercdn.com/`) media pipeline (Zero AI/synthetic images)
* **Structured Data:** Custom Schema.org JSON-LD engine (`CafeOrCoffeeShop`, `Restaurant`, `PostalAddress`, `GeoCoordinates`)

---

## 4. Complete Route Directory (25 Prerendered Routes)

Every page from the live production site is fully implemented as a clean, static, prerendered route:

```
Route (app)                              Type     Size     First Load JS
┌ ○ /                                    Static   9.6 kB          106 kB
├ ○ /_not-found                          Static   873 B          88.1 kB
├ ○ /1245-chapel-st                      Static   187 B          96.1 kB
├ ○ /911-whalley-ave                     Static   186 B          96.1 kB
├ ○ /accessibility                       Static   187 B          96.1 kB
├ ○ /careers                             Static   2.06 kB        89.3 kB
├ ○ /catering                            Static   1.95 kB        89.2 kB
├ ○ /events                              Static   187 B          96.1 kB
├ ○ /locations                           Static   199 B           101 kB
├ ○ /menu                                Static   139 B          96.5 kB
├ ○ /menu/1245-chapel-st                 Static   139 B          96.5 kB
├ ○ /page/birthdays--space-rentals       Static   2.19 kB        89.4 kB
├ ○ /page/breakfast                      Static   199 B           101 kB
├ ○ /page/brunch                         Static   199 B           101 kB
├ ○ /page/contact-us--locations          Static   1.97 kB         103 kB
├ ○ /page/halal-at-pistachio             Static   199 B           101 kB
├ ○ /page/press                          Static   294 B          92.7 kB
├ ○ /page/proudly-serving-new-haven      Static   199 B           101 kB
├ ○ /privacy                             Static   187 B          96.1 kB
├ ○ /robots.txt                          Static   0 B                0 B
├ ○ /sitemap.xml                         Static   0 B                0 B
├ ○ /story                               Static   199 B           101 kB
└ ○ /terms                               Static   186 B          96.1 kB
```

---

## 5. Live DOM Fidelity & Verification Audit

An automated headless browser audit comparing `localhost:3000` to `https://pistachiocafe.com/` verified **100% exact fidelity**:

1. **Headings Hierarchy (14/14 Verbatim Match in Exact Order):**
   * Section 1: `Welcome to Pistachio Cafe`
   * Section 1: `Coffee with a Touch of Art`
   * Section 2: `Proudly Serving New Haven`
   * Section 3: `Our Story`
   * Section 4: `Explore Our Menu`
   * Section 5: `Let’s Brunch`
   * Section 6: `Locations`
   * Section 6: `Pistachio Cafe`
   * Section 6: `Pistachio Cafe 2`
   * Section 7: `Private Events`
   * Section 8: `Join Piitachio Cafe Rewards`
   * Section 9: `Community & Art`
   * Section 10: `What Our Customers Say`
   * Section 11: `Order Online for Pickup or Delivery`
2. **Primary CTAs (8/8 Verbatim Match):** `Order online`, `View menu`, `Explore Our Menu`, `Let’s Brunch`, `Order Now`, `Inquire Now`, `Join Piitachio Cafe Rewards`, `Sign in`.
3. **Pluto CDN Media Pipeline (36/36 Authentic Assets):** Exact matching UUIDs and alt texts. Zero synthetic or AI images.
4. **Authentic Styling:** Mercury UI stylesheet (`public/mercury.css`) loaded via `<head>`, replicating all design tokens, shadows, margins, padding, and hover states.

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
