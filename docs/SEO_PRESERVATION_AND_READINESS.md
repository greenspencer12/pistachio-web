# SEO Preservation and Readiness: Owner.com to GoDaddy + Square

Status as of 2026-11-20. Nothing is published, DNS is untouched, and Owner.com is unchanged. Mohamad decides the cutover (about a week out).

## Short answer: does matching content carry the SEO value over?

Not by itself. Google ranks URLs, not designs. Value carries over only if:

1. The domain stays pistachiocafe.com (it does; only DNS changes at cutover, done by Mohamad).
2. Each old URL either still exists at the same path or 301-redirects to its replacement.
3. New pages are indexable (no noindex, a sitemap, canonicals).
4. Titles, headings and NAP (name, address, phone) stay consistent with Google Business Profile.

**GoDaddy Website Builder has no 301 redirect manager.** Any Owner URL whose path differs from GoDaddy's will 404 after cutover, and its link equity is lost. Match slugs where possible; accept the rest as a known loss.

## URL map (Owner path -> GoDaddy path)

| Owner URL | GoDaddy draft | Result |
|---|---|---|
| / | / | Same |
| /page/brunch | /brunch | Path differs: lost unless a GoDaddy slug is changed |
| /page/catering | /catering | Path differs |
| /story | /our-story | Path differs; rename slug to /story if the editor allows |
| /911-whalley-ave | /911-whalley-ave (new draft page) | Same, once the slug is confirmed |
| /1245-chapel-st | NOT YET BUILT | Needs a page with that slug |
| /tags/*, /places/* | none | Thin or doorway pages; dropping them is acceptable |
| /page/* other slugs | similar, different slugs | Path differs |

Action for Mohamad at cutover: before DNS moves, check each GoDaddy page's slug (Page Settings) and set it to the Owner path where GoDaddy allows. Everything else 404s.

## Checklist (not yet done unless marked)

- [x] Per-page titles and descriptions written for all 14 draft pages, including replacing the Owner spam home title.
- [x] New draft page "911 Whalley Ave" with its own title and description.
- [x] "1245 Chapel St" draft page built (1245 Chapel St, CT 06511, 203.800.4533) with its own title, description, dining-room photo and alt text.
- [x] 911 Whalley Ave page: Westville lounge photo and alt text added.
- [x] Header "ORDER ONLINE" link changed to https://menu.pistachiocafe.com/s/order.
- [x] "Our Story" page renamed "Story" so its slug should become /story (matches Owner). Verify in preview after cutover.
- [x] Home page content images (Story x2, Visit Us x2) now have alt text, verified after reload. Menu-item thumbnails in the Guest Favorites section show no alt in the editor; GoDaddy sets those from the item, unverified.
- [ ] H1 check: the Home editor shows the same H1 twice (likely the editor's desktop/mobile copy); confirm on the published preview. Other pages not individually checked.
- [ ] Confirm hours (7 AM open) and closing times with Mohamad.
- [x] Square Online SEO fixed and staged (not published): site social title; Order Online page title, description and social title. Takes effect only when Mohamad publishes Square.
- [ ] After cutover (Mohamad): submit the GoDaddy sitemap in Google Search Console, update Google Business Profile website links, re-run Rich Results Test, check Search Console coverage for 404s, reconnect social.
- [ ] Structured data (LocalBusiness/Restaurant schema with both addresses): GoDaddy generates basic schema only; custom JSON-LD needs a header-code option, not yet confirmed.

## Things that will be lost or change

- Owner-hosted images, scripts and its sitemap/robots vanish at cancellation; GoDaddy serves its own.
- Owner's per-location landing pages and tag/places pages have no GoDaddy equivalent.
- The 301 limitation above.

## Slugs: what GoDaddy allows

GoDaddy has no slug field. Page Settings only has Page Title, and the URL is built from the title. So a slug can only be matched by renaming the page.
- Matched: /catering, /911-whalley-ave, /1245-chapel-st, /story (renamed from Our Story).
- Cannot be matched: Owner's /page/* URLs (brunch, breakfast, press, contact-us--locations, birthdays--space-rentals, halal-at-pistachio, proudly-serving-new-haven). GoDaddy cannot add a /page/ prefix, and there is no redirect tool. These URLs will 404 after cutover.
- Check the real slugs in the GoDaddy preview before cutover; the editor does not display them.

## Square Online findings (public pages, read-only check 2026-11-20)

- menu.pistachiocafe.com/ has a good title and meta description, but og:title is "Personalized order screen".
- menu.pistachiocafe.com/s/order has an old title ("Unique Cafe serving Syrian Coffee, Turkish Delights, Baklava & Brunch!"), no meta description, and og text that mentions "Turkish Delights", which differs from the main site wording. No canonical tag seen.
- FIXED 2026-11-20 in the Square dashboard and left unpublished (autosaved): order page title/description now "Order Online | Pistachio Cafe New Haven, CT" with the matching description; site social title updated. Live pages keep the old text until Mohamad publishes.
- Square has a URL Redirects feature (Website > SEO) for 301s inside menu.pistachiocafe.com only; it cannot redirect the main-domain pages.
- Square item pages are only indexed if Square lists them in its sitemap; check after cutover.

## Square Online (earlier note)

The menu lives on menu.pistachiocafe.com (a subdomain), so it ranks separately from the main site. Its staged SEO was saved earlier but unpublished; a fresh review of titles, descriptions and indexability is still outstanding.
