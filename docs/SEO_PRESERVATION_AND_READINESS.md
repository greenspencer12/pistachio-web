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
- [ ] "1245 Chapel St" page (copy: 1245 Chapel St, New Haven, CT 06511, 203.800.4533, near Yale).
- [ ] Replace the stock coffee photo on the 911 Whalley Ave page with the Westville lounge photo, with alt text.
- [ ] Header "ORDER ONLINE" link: change http to https://menu.pistachiocafe.com/s/order.
- [ ] Confirm one H1 per page and alt text on images.
- [ ] Confirm hours (7 AM open) and closing times with Mohamad.
- [ ] Square Online SEO review (site title, item titles, descriptions, location pages): not yet reviewed.
- [ ] After cutover (Mohamad): submit the GoDaddy sitemap in Google Search Console, update Google Business Profile website links, re-run Rich Results Test, check Search Console coverage for 404s, reconnect social.
- [ ] Structured data (LocalBusiness/Restaurant schema with both addresses): GoDaddy generates basic schema only; custom JSON-LD needs a header-code option, not yet confirmed.

## Things that will be lost or change

- Owner-hosted images, scripts and its sitemap/robots vanish at cancellation; GoDaddy serves its own.
- Owner's per-location landing pages and tag/places pages have no GoDaddy equivalent.
- The 301 limitation above.

## Square Online

The menu lives on menu.pistachiocafe.com (a subdomain), so it ranks separately from the main site. Its staged SEO was saved earlier but unpublished; a fresh review of titles, descriptions and indexability is still outstanding.
