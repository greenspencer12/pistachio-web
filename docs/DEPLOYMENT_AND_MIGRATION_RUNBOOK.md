# Zero-Downtime Deployment, DNS Cutover & Owner.com Termination Runbook

**Target Domain:** `pistachiocafe.com` & `www.pistachiocafe.com`  
**DNS Registrar:** GoDaddy (Account Access Provisioned to Saif Uddin)  
**Edge Hosting Platform:** Vercel / Cloudflare Pages / Netlify  
**Commerce Backbone:** Square POS  
**Principle:** **Zero Business Downtime Guarantee** (Owner.com is never canceled until physical kitchen printing is confirmed on the live domain).

---

## 1. Pre-Cutover Verification Checklist (Gate 1)

Before modifying any GoDaddy DNS records, every item in this checklist must be signed off:

- [x] **Static Production Build Passing:** `npm run build` succeeds with 0 lint, type, or prerendering errors (25/25 routes static).
- [x] **DOM & Visual Fidelity Sign-Off:** Verbatim match of 14/14 headings, 36/36 Pluto CDN assets, 8/8 CTAs, Poppins typography, and Mercury UI styles.
- [ ] **Square OAuth Credentials Handshake:** Complete Monday session between Saif Uddin and Mohamad Hafez to finalize OAuth elevation for Production Access Token and Location IDs.
- [ ] **Hardware Printer Test Order:**
  1. Trigger an authorization test order of $1.00 through `createStoreOrder()` targeting Location 1 (Whalley Ave).
  2. Confirm physical ticket prints at the Whalley Ave barista station.
  3. Trigger an authorization test order of $1.00 targeting Location 2 (Chapel St).
  4. Confirm physical ticket prints at the Chapel St counter.
  5. Void / refund both test orders in Square Dashboard.
- [ ] **Google Calendar Sync Sign-Off:** Submit test private event inquiry on `/page/birthdays--space-rentals` and confirm the booking event appears in Mohamad's Google Calendar.

---

## 2. GoDaddy DNS Cutover Protocol (Gate 2)

Once Gate 1 is satisfied, execute DNS cutover inside the GoDaddy DNS Management Console:

### 2.1 Lower TTLs (24 Hours Prior)
* Reduce TTL (Time to Live) on existing `A` and `CNAME` records from `1 Hour` to `600 seconds` (10 minutes) 24 hours prior to migration. This ensures rapid global DNS propagation.

### 2.2 Reconfigure DNS Records for Vercel / Cloudflare
| Type | Name | Content / Target | TTL |
| :--- | :--- | :--- | :--- |
| `A` | `@` | `76.76.21.21` (or Cloudflare Edge IP) | `600` |
| `CNAME` | `www` | `cname.vercel-dns.com.` | `600` |

### 2.3 SSL Provisioning & Edge Verification
1. Automatic Let's Encrypt / DigiCert SSL certificate generation initiates via edge provider upon DNS resolution.
2. Verify HTTPS connectivity:
   ```bash
   curl -I https://pistachiocafe.com/
   curl -I https://www.pistachiocafe.com/
   ```
   Confirm `HTTP/2 200 OK` response with strict transport security (`HSTS`).

---

## 3. Post-Cutover SEO & Infrastructure Activation (Gate 3)

Immediately following DNS cutover:

### 3.1 Google Search Console Sitemap Resubmission
1. Log in to Google Search Console under authenticated `siteFullUser` access.
2. Remove deprecated, broken `sitemap.website.xml` (June 2025).
3. Submit official dynamic Next.js sitemap:
   ```
   https://pistachiocafe.com/sitemap.xml
   ```
4. Verify GSC reports: `Success`, 25 URLs discovered, 0 errors.

### 3.2 Rich Results & Schema.org Verification
Run Google's live Rich Results Test on:
* `https://pistachiocafe.com/`
* `https://pistachiocafe.com/1245-chapel-st`
* `https://pistachiocafe.com/911-whalley-ave`
* Confirm: Valid `CafeOrCoffeeShop`, `Restaurant`, `PostalAddress`, `GeoCoordinates`, and `OpeningHoursSpecification` detected with 0 errors and 0 warnings.

### 3.3 301 Permanent Redirects for Legacy Doorway Pages
Ensure requests to legacy `/places/*` URLs (e.g., `/places/downtown`, `/places/west-haven`) return HTTP 301 redirects to the corresponding primary location hub (`/1245-chapel-st` or `/911-whalley-ave`) to preserve any historical backlink equity without triggering Google Doorway penalties.

---

## 4. Owner.com Contract Termination Notice (Gate 4)

Only after the live website is processing live orders and kitchen tickets are printing continuously for **24 hours**, Mohamad Hafez will send the formal cancellation notice:

```
From: Mohamad Hafez <owner@pistachiocafe.com>
To: support@owner.com, billing@owner.com, success@owner.com
Date: October [Day], 2026
Subject: Immediate Cancellation & Non-Renewal of Subscription — Pistachio Cafe (911 Whalley Ave & 1245 Chapel St)

Dear Owner.com Team,

Please accept this formal written notice of cancellation for all software subscriptions, online ordering services, and mobile application hosting provided by Owner.com for Pistachio Cafe and Pistachio Cafe 2, effective immediately.

As our domain DNS has been migrated to our internal infrastructure and our online ordering is now handled natively via Square POS, please immediately:
1. Cancel our recurring $500 monthly subscription billing and ensure no future charges are processed against our credit card on file.
2. Provide written confirmation of account closure and billing termination within 2 business days.
3. Unpublish the mobile apps from the Apple App Store and Google Play Store under our account.

We appreciate the services provided previously.

Sincerely,

Mohamad Hafez
Founder & Owner, Pistachio Cafe & Pistachio Cafe 2
New Haven, CT
```
