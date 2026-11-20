# GoDaddy + Square restore plan (Option A)

Decision (Mohamad, via Saif, 2026-11-19): after Owner.com is cancelled (planned end of November 2026, only when Mohamad confirms), pistachiocafe.com goes back to his **GoDaddy Website Builder site**, with ordering on **Square Online at menu.pistachiocafe.com**. He keeps manual control and wants it fully updated with the current content and good SEO.

**Hard rule:** do not disturb the live Owner setup. No change to the `@`, `*`, `www` DNS records and no Publish of the GoDaddy site until Mohamad confirms the cutover. Work only on the GoDaddy draft. The Owner copy in this repo is the content source of truth.

## Audit so far (read-only, 2026-11-19)

### GoDaddy account (Mohamad's, accessed by delegate)
- Domains: pistachiocafe.com and pistachio.cafe (both renew 28 Jan 2027). `luisacellist.com` is unrelated; leave it alone.
- Website product: **Website Builder** (theme "Slate"), shown as PUBLISHED but **last published 12 June 2025**. It is not what visitors see today because the domain's DNS points at Owner (Cloudflare).
- Also attached: Store (online store), Appointments (booking: the "Order a Cake" service and space-rental booking), Marketing/SEO tools, Conversations, Email.

### DNS for pistachiocafe.com (GoDaddy nameservers)
- `@` and `*` A/AAAA -> Cloudflare addresses (Owner). **Do not change until cutover.**
- `menu` A -> 199.34.228.180 (Square Online). Keep.
- `command` CNAME -> pistachio-command-center.onrender.com (an existing Render app). Keep.
- `www` CNAME -> pistachiocafe.com; Postmark bounce CNAME and a DKIM TXT for email. Keep.
- Page 2 of the records list was only partly read; re-read it fully before any cutover.

### Old GoDaddy site structure (12 menu items)
Home, Order Online (-> http://menu.pistachiocafe.com), Brunch, Catering, Birthdays & Space Rentals, Order a Cake (GoDaddy Appointments service, absolute link to pistachiocafe.com/birthdays-&-space-rentals/ola/services/order-a-cake), Contact Us & Locations, Press (/press-1), Giftcards (squareup.com gift link), Our Stores, Join Our Team (Homebase), Instagram.
Home headline: "Welcome to Pistachio — a harmonious blend of café, restaurant, and dessert bar, where indulgence knows no bounds." It still describes "Pistachio 1/2" and an older concept.

### Square Online (menu.pistachiocafe.com)
Live and working: Order Online with Pickup/Delivery and current items and prices (e.g. Rose Latte, Chicken Shawarma Wrap, Baklava Box). Items/prices/hours/SEO fields still to audit.

## Draft edit log (GoDaddy Website Builder, unpublished to the domain)
Editing is done through the delegate session in the editor; the draft autosaves. **Publish has not been clicked.**
- 2026-11-19, Home hero headline -> "A Harmonious Blend of Café, Breakfast, and Dessert in New Haven" (Owner's current H1).
- 2026-11-19, Home hero subtitle -> fresh coffee / daily brunch / baklava line naming both addresses.
- 2026-11-19, Home intro (old "Pistachio 1 / Pistachio 2" paragraphs) -> Owner's "Welcome to Pistachio Cafe!" paragraph.
- 2026-11-19, Home "Serving Brunch Daily" section title -> "Fresh Brunch, Seven Days a Week" (autosave confirmed).
- 2026-11-19, Contact Us & Locations hours widgets set to Owner's hours (Mohamad: Owner's hours are the latest). Pistachio Cafe 1 (911 Whalley Ave): Sun-Thu 7:00 am-7:00 pm, Fri-Sat 7:00 am-9:00 pm. Pistachio Cafe 2 (1245 Chapel St): Sun-Thu 7:00 am-9:00 pm, Fri-Sat 7:00 am-10:30 pm. Verified in the editor day tabs and live preview. Previous values were 8:30 am-8:30 pm (P2) and 7:00 am-9:30 pm (P1). Incident: one Friday entry was briefly switched to "By Appointment" by a mis-keyed selection; it was corrected to 7:00 am-9:00 pm before moving on. Still to cross-check against Google Business Profile.
- 2026-11-19, footer copyright 2024 -> 2026 ("Copyright © 2026 PISTACHIO CAFE - All Rights Reserved.").
- 2026-11-19, Catering page: top section title -> "Pistachio Catering for Every Occasion" and paragraph -> Owner's intro paragraph (edited via the section side panel Title/Description fields; click-to-type on the canvas opens the panel instead of inline editing). Button "ORDER CATERING SERVICES" left as is; it links to https://menu.pistachiocafe.com/s/appointments (a deliberate Square link, Owner's equivalent button just scrolls to its own form). Still old on Catering: "Cater your next event or rent out our space!" block, Yale University & Pistachio section (Owner moved Yale copy to /page/proudly-serving-new-haven), space-rental section with old hours, menu download. Still missing from Catering: "Make Your Connecticut Event Unforgettable", the four event types (Corporate, Weddings, Private Parties, Holiday), "Order Catering Today" copy, and the request form (Owner fields: name, email, phone, event date/time, guests, store location, space, details).
- 2026-11-19, found the existing GoDaddy contact form's "Send Message To" address: info@PISTACHIONHV.COM (Contact Us & Locations > Contact Form panel; read only, not changed). The new catering request form must use this same address per Mohamad. The form panel also notes messages land in the GoDaddy Conversations inbox. The existing form already supports custom fields (e.g. "Birthday").
- 2026-11-19/20, Catering page: added a new Contact section (GoDaddy "Contact Us" layout with form) between the intro and the old "Cater your next event" block. Section title "Catering Request"; form title "Planning an Event? Let's Make It Easy."; heading "Fill out the form below and our team will get back to you shortly."; description prompts for event details. Form recipient is the account default info@PISTACHIONHV.COM (same as the existing form; confirmed in the panel). Fields: Name, Email*, Message, Phone Number* (phone type), Event Date and Time*, Number of Guests*, Store Location*, Space of interest (optional). Limits: GoDaddy form field types are only single-line, multi-line and phone (no dropdown/date picker, so guest-count ranges, location and space are free-text). Space field made optional (Owner requires it, which does not suit non-space catering). Default section content hidden/replaced: WhatsApp button off, hours display off (defaults were wrong, Mon-Fri 9-5), address cleared, phone box lists both locations with phones. Not yet test-submitted (a test would email Mohamad's inbox; do it only with his OK). Also the form sits above the Yale/space block; reorder to the bottom later.
- 2026-11-20, Catering page, Owner copy now in place: intro section gained Owner's "Make your Connecticut event unforgettable" paragraph; new text-only Content section "Cafe Catering for Every Occasion" with four groups (Corporate Events, Weddings, Private Parties, Holiday Parties; the six template placeholder groups were reduced to these four); request section description is Owner's "Order Catering Today" copy. Page order now: hero gallery, intro, event types, Catering Request form, then the old "Cater your next event or rent out our space!" block (Yale University & Pistachio + Book Your Event Space Today), which is still old and still to be reconciled with Owner's Birthdays/Private Events and Proudly Serving New Haven pages.
- 2026-11-20, Brunch page: existing hero ("Join us for brunch!"), "Served daily: Mon-Thur 8:30am-3pm, Fri-Sun 8:30am-5pm" (already matches Owner), gallery, "View Our Menu" and "Detailed Menu Book" PDF blocks (same hours) kept. Added a text-only Content section "Brunch at Pistachio Cafe in New Haven" between the gallery and "View Our Menu" with Owner's four brunch articles verbatim (Cozy New Haven Brunch and Coffee; The Best Salmon Tartine in New Haven; Lively Weekend Mornings at Pistachio Cafe; Modern Mediterranean Brunch Plates in New Haven). Template placeholder groups deleted; autosave confirmed. Owner labels its two menus "Whalley Ave" and "Chapel St"; the two GoDaddy menu blocks are not yet labelled per location (check which PDF is which before renaming).
- 2026-11-20, Birthdays & Space Rentals page: audited. Existing GoDaddy Appointments service lists (Pistachio 1 Salon 12 guests/2 hrs/$250; Full Dining Hall 65 guests/5 hrs/$1,450; Order a Cake; Pistachio 2 "Majles" dinner/lunch/dessert-and-tea at 20 guests) already agree with Owner's Private Events facts (Salon 12 guests, $250 for 2 hrs, hall up to 65, Majlis up to 20). Added an Introduction section after the top gallery: secondary title "The Perfect Setting for Every Occasion", title "Private Events & Dining in New Haven", Owner's first intro sentences, and "Email info@pistachionhv.com for more info." (same address as the forms). Limits: the Introduction description field caps at about 330 characters, so Owner's last two intro sentences ("Choose from intimate private rooms or larger event spaces. Catering and event packages are customized...") were left out; default "Find out more" button turned off; beige background was tried but hid the email link colour, so the dark background stays. Still to do: top gallery heading "Let us plan your events / birthdays!" still old; spelling "Majles" vs Owner "Majlis" lives in the Appointments service names (ola.godaddy.com); Owner's Private Events inquiry form not built here because GoDaddy Appointments handles booking (Mohamad's choice); autosave confirmed for the new section.
- 2026-11-20, Press page: audited, GoDaddy blog already carries the same press articles as Owner; no change.
- 2026-11-20, new page "Our Story" (page id 1451d848-9e8d-4d5c-a514-3de0224f3bdf): text-only Content section with Owner's four story blocks verbatim (Our Journey Began With a Dream; A Menu Experience Like No Other; What Makes Pistachio Special; Visit Pistachio Cafe Today). Owner headings carry emoji (not copied). Shown in navigation (under More).
- 2026-11-20, new page "Breakfast" (page id 1c651d0c-2866-4577-acdb-af4f276dbadb): section "Breakfast at Pistachio Cafe" with Owner's four blocks verbatim (Top New Haven Breakfast at Pistachio Cafe; Best Avocado Toast Tartine; Taste New Haven's Arabic Coffee; Cozy Mornings). No photos yet (Owner has a gallery). Saved; verified after a reload. Editor tab froze once and was reopened; nothing lost.
- 2026-11-20, new page "Halal at Pistachio" (page id f88eb78c-33da-4127-8ca4-a5dbcf8b2dfc): section "100% Halal Dining in New Haven" with Owner's six blocks verbatim (Fresh. Delicious. Halal.; 100% Halal. Dine with Total Peace of Mind; Zero Compromise: Our Strict Halal Kitchen; Gather for Halal Brunch & Yemeni Coffee; Craveable Menu Favorites & Halal Catering; Halal Food Done Right). Owner's "Visit Us Today", "Order Halal Online" and "Halal Catering" buttons are not added yet (link targets: menu.pistachiocafe.com and the Catering page). Autosave confirmed. The editor tab froze three times while typing; each time a fresh tab recovered it and the saved content was intact.
- 2026-11-20, new page "Proudly Serving New Haven" (page id 8895a717-025f-4ec4-9288-d828edc929c4, draft only, not published): text-only section titled "Proudly Serving New Haven" with six groups from Owner's copy (Fresh Convenient Dining in the Heart of New Haven; Serving New Haven's Leading Universities; Fueling New Haven's Hospitals & Healthcare Workers; Why New Haven Chooses Pistachio Cafe; Rich Middle Eastern Brunch & Yemeni Coffee; Two Convenient New Haven Locations). Bullet lists were flattened into sentences; the closing CTA "Order Ahead & Skip the Line Today" is not added yet. Verified after a fresh reload that the content persisted. The draft site navigation already lists the four new pages (Our Story, Breakfast, Halal at Pistachio, Proudly Serving New Haven) at /our-story, /breakfast, /halal-at-pistachio and /proudly-serving-new-haven, under the "More" menu on the header; the Home footer links were not changed.
- 2026-11-20, Home page (draft, not published): added one new text-only Content section "Pistachio Cafe in New Haven" (section id b76c8e7f-238f-4713-be5c-e56a7ae84358), placed between Reviews and Privacy Policy, with five groups of Owner's copy: Your New Favorite Breakfast Spot in New Haven; Daily Meals, Always Fresh; A Coffee Shop for True Coffee Lovers; Order From Our Website; Hosting an Event? We've Got Catering. Emoji in Owner's headings were dropped, and the unused sixth template group ("Display their FAQs") was deleted after checking its headline. Autosave confirmed after a reload in a fresh tab (editor froze twice). The existing Home hero, intro, gallery, brunch and Reviews sections were left as they were. Still to do on Home: move this section higher up, add "Order Now", "Explore Our Menu" and "Inquire Now" buttons (menu.pistachiocafe.com / Catering page), and Owner's FAQ and Rewards blocks.
- 2026-11-20, Catering page check (read-only): the draft already has Owner's blocks (Pistachio Catering for Every Occasion; Cafe Catering for Every Occasion with Corporate Events, Weddings, Private Parties, Holiday Parties; Catering Request form) followed by older blocks Owner does not have ("Cater your next event or rent out our space!", "Yale University & Pistachio", "Book your event space today!", "Our Pistachio Space", "Detailed Menu Book"), then Instagram and Reviews. Nothing deleted; needs Mohamad's decision on whether to keep the old blocks. Moving the new Home section upward was attempted but the editor froze when scrolling the long Home page, so the new section still sits above Privacy Policy.
- 2026-11-20, Contact Us & Locations (draft page id f4c5a782-66e1-4a11-b2a9-f5e9a3d3d9a5), read-only check: the two Hours blocks already match Owner exactly. Whalley Ave: Sun-Thu 7:00 am-7:00 pm, Fri-Sat 7:00 am-9:00 pm. Chapel St: Sun-Thu 7:00 am-9:00 pm, Fri-Sat 7:00 am-10:30 pm. The page already has the "No reservations required for parties under 10" line, the Owner-style message and both addresses/phones (203.800.4262, 203.800.4533) and a Name/Birthday/Email/Message form. No edits needed. Not yet compared with Google Business Profile hours.
- 2026-11-20, "Our Stores" page (draft page id 40969493-7b94-4d21-a651-8e8863af2ac7), read-only check: it is the old story-style landing page ("Welcome, Salam, Merhaba!", "Curious about us?! Check out our story!", watch-the-video button, social icons), not a locations list. Owner's Our Story copy now lives on the new "Our Story" page. Nothing edited. Decision for Mohamad: repoint the footer "OUR STORES" link to the new Our Story page (and rename it) or keep the old video page.
- 2026-11-20, SEO titles/descriptions set in the draft (Settings > Get found on Google > SEO Settings, autosave confirmed, nothing published). Owner's exact text where Owner had real text: Home "Pistachio Cafe | Best Cafe in New Haven, CT | Cafe near me" (replaced "Home | Discover Coffee Bliss at PISTACHIO CAFE") with Owner's description; Catering "Pistachio Cafe Catering in New Haven, CT" with Owner's description; Contact "Contact Us & Locations | Pistachio Cafe"; Press "Press | Pistachio Cafe"; Our Story "Pistachio Cafe | Our Story" with Owner's description. Where Owner only had a generic line, titles were made keyword-richer and descriptions written only from facts already on the pages: Brunch "Brunch in New Haven, CT | Pistachio Cafe" (old description "The Largest Selection of Baklava..." replaced); Birthdays & Space Rentals headline "Private Events & Birthday Space Rentals | Pistachio Cafe" (old description kept: "Celebrate your Birthday or Event by Booking our Salon. Drinks and food included..."; Mohamad to confirm it is still true); Breakfast, Halal at Pistachio and Proudly Serving New Haven new titles/descriptions; Contact description lists both addresses/phones. Not yet done: Our Stores, House Rules/Privacy, Instagram, Order a Cake pages; the per-page structured data (LocalBusiness) is not controllable here.
- 2026-11-20, Square Online audit (menu.pistachiocafe.com, published Nov 16, 2026, accepting orders, visible to search engines, no URL redirects). The SEO title was "Personalized order screen | PISTACHIO CAFE MENU" with no description. Saved (staged, NOT published; Square says SEO updates take effect on the next publish): site title "Order Online | Pistachio Cafe New Haven, CT" (Square appends " | PISTACHIO CAFE MENU") and description "Order online from Pistachio Cafe in New Haven, CT: fresh coffee, daily brunch and baklava. 911 Whalley Ave and 1245 Chapel St." Still to audit: Square site content/hours, location info, item names and the social preview text. Mohamad or the user must publish the Square site for this to go live. Verified on the public page that nothing leaked live: menu.pistachiocafe.com still serves the old title "Order Online | PISTACHIO CAFE MENU" and an empty meta description, so the staged SEO text is not published. The public page itself is a thin order-start screen (account sign-up, View menu, Pickup, Delivery) with no hours or address text. Rule from the user: we never publish; Mohamad does.
- 2026-11-20, hours cross-check against the public Google listing (search results, read-only; I did not open the Google Business Profile dashboard): the cafe hours match Owner and the GoDaddy draft for both locations (Whalley Ave Sun-Thu 7 AM-7 PM, Fri-Sat 7 AM-9 PM; Chapel St Sun-Thu 7 AM-9 PM, Fri-Sat 7 AM-10:30 PM). Google also shows a "Delivery & Takeout" window of Mon-Thu 7:30 AM-3 PM and Fri-Sun 7:30 AM-5 PM for both and a Chapel St holiday entry for Nov 26, 2026 (7 AM-3 PM). Third-party sites show stale hours (Visit New Haven, Yelp-style, joe.coffee, Uber Eats, LaptopFriendly); those are outside our control. Mohamad to confirm whether the shorter delivery/takeout window is intended since Owner's pages say online ordering for pickup or delivery without those limits.
- Found: the home Instagram block shows "Reconnect to Facebook" in the editor. It needs Mohamad's Facebook/Instagram login to reconnect; leave to him.
- Found: the home Reviews block is a live Google feed (4.3 stars, 1,240 reviews); keep.
- Owner home sections not yet on the GoDaddy home: "Your New Favorite Breakfast Spot in New Haven", "Daily Meals, Always Fresh", "A Coffee Shop for True Coffee Lovers", "Order From Our Website", "Hosting an Event? We've Got Catering". Each needs a new section added in the builder.
- Still old on Home: sections below the intro (Instagram, gallery captions, "Serving brunch daily", rest), plus every other page and the SEO settings.
- Owner home copy used as source: `owner_home_text.txt` (extracted from `content/docs/home.html`), one level above this repo.

## Remaining plan
1. Finish audit: text and photos of every GoDaddy page, per-page SEO titles/descriptions, Store and Appointments setup; Square items, categories, both locations, hours, SEO and site settings.
2. Gap list: compare old GoDaddy content with the Owner site (content/docs in this repo = current live Owner content) page by page.
3. Update the GoDaddy **draft** with current content: home, both locations (911 Whalley Ave, 1245 Chapel St), menu links, breakfast/brunch, catering, private events/space rentals, press, story, careers, halal, accessibility/terms. Keep Order Online buttons pointing to Square.
4. SEO on GoDaddy: unique title and meta description per page, one H1 per page, image alt text, LocalBusiness/Restaurant structured data for both locations, correct NAP and hours, sitemap, Google Business Profile and Search Console. Square Online SEO fields filled in too.
5. Cutover checklist (only on Mohamad's go): export a DNS backup, publish the GoDaddy site, switch only `@` and `www` to GoDaddy, keep `menu`, `command` and email records, check every page, resubmit the sitemap, keep 301s for old Owner URLs where GoDaddy allows (it limits redirects; list the important ones).

Known GoDaddy-builder limits to disclose to Mohamad: no custom per-page JSON-LD beyond what the builder provides, limited redirect control, and no 1:1 pixel copy of Owner's design.

## Cutover checklist for Mohamad (drafted 2026-11-20; nothing here has been done)

Rule: Claude never publishes or changes DNS. Mohamad does each step below himself, only after he decides to cancel Owner.

Before cutover
1. Review the GoDaddy draft page by page in the editor Preview (Home, Brunch, Catering, Birthdays & Space Rentals, Contact Us & Locations, Press, Our Story, Breakfast, Halal at Pistachio, Proudly Serving New Haven). Check text, hours, phone numbers and the email on every form.
2. Decide the open questions: older Catering blocks (space rental, Yale, menu book), the footer "OUR STORES" link (old video page vs Our Story), the Private Events description ("Drinks and food included"), and the Google delivery/takeout window.
3. Reconnect Instagram and Facebook in the Home Instagram block and the Instagram page (needs Mohamad's own Facebook login).
4. Optional: place the new Home section ("Pistachio Cafe in New Haven") higher up the page; add buttons to Order Now / Explore Our Menu (menu.pistachiocafe.com) and Inquire Now (Catering page).
5. In the Appointments tool (ola.godaddy.com) change the "Majles" service names to "Majlis" if that is the correct spelling.
6. Publish the Square Online site so the staged SEO title and description go live.
7. Screenshot or export the current DNS records at GoDaddy for @, www, menu, the command record and all email records.

Cutover (only once Owner is confirmed cancelled or ready to switch)
8. In GoDaddy Website Builder click Publish on the draft.
9. Change only the @ and www records to point at GoDaddy Website Builder hosting. Leave menu (Square), the command record and all email records untouched.
10. Check https://pistachiocafe.com, /catering, /brunch, /breakfast, /our-story, /halal-at-pistachio, /proudly-serving-new-haven and the forms; submit one test form and confirm the email arrives.
11. Check Google Search Console and the Google Business Profile website link; submit the new sitemap.
12. Only after everything works, cancel Owner by the end of the month.

Known limits of GoDaddy Website Builder: no dropdown/date form fields, limited redirect control, no per-page structured data, and not a 1:1 copy of Owner's design.

- 2026-11-20, Appointments (ola.godaddy.com): "Majles" appeared only in the category name, not in any service name. Renamed the category "PISTACHIO 2 MAJLES RESERVATIONS" to "PISTACHIO 2 MAJLIS RESERVATIONS" (matches Owner's spelling; Appointments edits are live in the booking tool, no publish step). Checklist item 5 is done. The six services were not touched. All other "before cutover" questions stay with Mohamad.

- 2026-11-20, buttons and ordering (GoDaddy draft only, nothing published): Home section "Pistachio Cafe in New Haven" now sits above Reviews (order: new section, Reviews, Privacy Policy) and has three buttons: "Explore Our Menu" and "Order Now" (both open https://menu.pistachiocafe.com) and "Inquire Now" (opens the Catering page). Halal at Pistachio page: "Order Halal Online" on the first group (https://menu.pistachiocafe.com) and "Halal Catering" on the "Craveable Menu Favorites & Halal Catering" group (Catering page). Owner's "Visit Us Today" button on the Halal page is not added. Re-checked after reloads: all five buttons present. Photos for the Breakfast and Our Story pages were NOT added (the new pages are text-only); to be done by hand later or with Mohamad's photo choices.
- Final verification, same day: live pistachiocafe.com is still Owner's site ("Powered by Owner", Owner's title, none of the draft content); menu.pistachiocafe.com still has its old title and empty description (staged Square SEO not published); the GoDaddy draft was never published and DNS was not touched; the Appointments category rename is the only live-on-save change, together with nothing else.

## Owner image placement list (added 2026-11-20)

Photos are already saved in the clone repo `pistachio-web` under `media/originals/funnel/images/<id>` (no extension; they are Owner-hosted images captured before cancellation). Reuse these files when placing photos in the GoDaddy draft. Logo `5e40041a-...` is the header logo on every page and is skipped below. Nothing was uploaded to GoDaddy; Mohamad or we place them later as drafts.

### Breakfast
- `438a9a34-2bc5-489d-b46f-cd34eb251f2d` (saved): Exterior view of Pistachio restaurant, a brick building with large windows and a prominent sign.
- `6ef54b1a-ed16-478f-acce-a7ac8a9bc777` (saved): Pistachio restaurant interior with a neon sign, floral wall decor, brown booths, and a dessert display.
- `2000e506-096d-4511-b014-f8ba27f8ff02` (saved): Pistachio restaurant exterior with outdoor seating, blue umbrellas, and potted plants on a sunny day.
- `d5436d50-6f57-46e3-828b-ed480d8b4af1` (saved): The Best Avocado Toast Tartine in New Haven
- `8a3093a4-4447-4e0b-8dcf-4834771ea2f2` (saved): Taste New Haven’s Arabic Coffee
- `63cba147-e7a6-496b-97e1-85837697b5f3` (saved): Cozy Mornings at Pistachio Cafe
- YouTube video: https://www.youtube.com/watch?v=EYx6P8TPI2c

### Our Story
- `7d118de9-5d62-4ad9-8629-f2764bb917cd` (saved): A Menu Experience Like No Other 🍽️
- `842efd27-ae46-4dbd-8093-d6a6be69e344` (saved): What Makes Pistachio Special 🌟

### Brunch
- `c77365b9-a0ed-4236-b8e3-cf19524d0304` (saved): Cozy New Haven Brunch and Coffee
- `0e7c5d1c-8716-456a-8d13-6365597c3210` (saved): The Best Salmon Tartine in New Haven
- `183afef8-8a65-488a-870c-9673937904e2` (saved): Lively Weekend Mornings at Pistachio Cafe
- `c7cff23c-f1f4-457e-8901-87fc6cc9af9c` (saved): Modern Mediterranean Brunch Plates in New Haven

### Halal
- `b17850ac-9458-482b-8639-51b33c6981d0` (saved): Fresh. Delicious. Halal. Welcome to Pistachio Cafe
- `c4acae56-08d5-483c-8c46-67eac890149c` (saved): 100% Halal. Dine with Total Peace of Mind
- `acf6a2f3-738e-4ff9-9665-e3d2f3308b0c` (saved): Gather for Halal Brunch & Yemeni Coffee
- `2cd974cf-3516-4fed-829d-8b2c3b9de65f` (saved): Craveable Menu Favorites & Halal Catering

### Birthdays
- `afd4ef9e-68af-423b-ac11-955992121710` (saved): Private Events & Dining in New Haven
- `051eb2aa-b4a0-4ed6-8178-912054214da1` (saved): The Perfect Setting for Every Occasion
- `e14747a1-68e1-42ee-b4ba-9f1c1d76e814` (saved): Pistachio 1 Full Dining Hall Reservation
- `8944ec21-b4d3-473e-97f2-f763b842a21b` (saved): Pistachio 1 Salon Reservation
- `d08bef05-1abc-438b-a140-eadf0a6dc66d` (saved): Pistachio 2 – Private Majlis
- `9ebedd9c-bbe7-415c-b236-f7ae7521cb33` (saved): Cappuccino topped with rose petals and flaky pastries on a café table beside ornate décor and a velvet sofa.
- `d4c7b0aa-6bf7-41dd-8bc9-67b99d73082c` (saved): Luxurious restaurant dining room with ornate stained-glass windows, patterned red seating, gold decor, crystal chandelier, and fully set tab
- `0288a106-54bb-4c2b-b2d9-86ab2645f999` (saved): Ornate peacock artwork hangs above a green tufted restaurant booth and marble table with a small vase of pink flowers.
- `b336a6e9-30f4-4cc6-a125-80beb3839433` (saved): Ornate restaurant dining room with a crystal chandelier, floral mural, patterned cushions, red banquette seating, and set tables.
- `a51a243f-8e17-4d3c-b87a-b3d7037a55c6` (saved): Elegant restaurant lounge with classical busts on a black marble table, antique sofa, lamps, and arched illuminated wall niches.
- `7541d3cc-fb04-4200-833c-0f5b640ce323` (saved): Cappuccino on a saucer beside a floral chair in an elegant café lounge with chandeliers, sofas, and a glass skylight.
- `1dc8d7b7-f387-44d1-89ca-838d6621f683` (saved): Coffee topped with foam and rose petals on a marble table in an elegant restaurant lounge with flowers, chandelier, and ornate furnishings.
- `07c786f9-eb2f-4217-a2ad-109b92b347b2` (saved): Restaurant entrance with pink lilies, ornate wall logo, dark dining booths, and a glowing Pistachio neon sign.
- `3c09d2cb-7114-45c7-8151-5b47a01bd430` (saved): Coffee and decorated pastries sit on a café table overlooking a warmly lit bakery counter and chalkboard menu.

### Press
- `d1f7aaa5-c6b6-456b-aaf3-cf4c3a3bd7a3` (saved): Hafez Continues Artistic Mission in Latest Venture
- `223e3770-a8ce-49b0-b489-09e3175ce37a` (saved): Syrian Artist-Owned Café Aims to Be Community Hub
- `8baa7bc5-6c28-4f19-a42d-ed2173dd2a66` (saved): New Coffee Shop Brings Majlis To Westville
- `489b780c-7ad4-4ec0-87b4-bf05bfa5c62a` (saved): Pistachio Prepares a Sweet Opening In Westville
- `de774d6c-9105-49af-a75f-55e8cd537261` (saved): Delicacy, and Delicacies
- `97df7df6-daca-4294-84c9-7014446b51b0` (saved): Pistachio Cafe Offers Taste of Syrian Owner's Home
- `5cc7b247-413d-41a1-b478-61886f592292` (saved): Syria to New Haven: Artist’s Salon Bridges Divides
- `ed03e7b2-4cdb-492a-bb15-692cf6954ee8` (saved): Syrian Artist Opens Cafe in New Haven

### Proudly Serving
- `c01997e5-9d8f-4439-95a0-a672b615889c` (saved): Fresh Convenient Dining in the Heart of New Haven
- `a0f300de-5e87-4c36-b57c-453ba3b51298` (saved): Serving New Haven’s Leading Universities
- `2a901f3f-a190-43a1-af3f-a11149bd6cfd` (saved): Fueling New Haven’s Hospitals & Healthcare Workers
- `03935411-4ed2-4153-91e7-83d045824e14` (saved): Why New Haven Chooses Pistachio Cafe
- `d014e068-0398-483e-b089-e402e41fd3a7` (saved): Rich Middle Eastern Brunch & Yemeni Coffee
- `018b4fc6-9ae6-4223-bda2-33340cab264d` (saved): Two Convenient New Haven Locations

### Catering
- `a1771d7b-2839-4e24-904d-262a77f42fc5` (saved): Pistachio Catering for Every Occasion
- `9a9ee18f-46f7-4790-9f17-025be441870a` (saved): Make Your Connecticut Event Unforgettable
- `7e9d9406-949e-4ac2-a94e-f2cca218c6f9` (saved): A platter of grilled sandwiches and falafel wraps garnished with cherry tomatoes and cucumber slices.
- `1395245d-cfef-445d-ab30-d998ec878455` (saved): A black platter filled with various Middle Eastern sweets, including sesame cookies, halva, and Turkish delight.
- `98f3c29b-5d1c-4cc8-85bf-ada7ab9f5209` (saved): A black segmented tray filled with various colorful macarons and Turkish delights.

### Image upload attempt (2026-11-20, draft only, nothing published)
- Breakfast page: the section's current layout is text-only, so card photos do not render. Uploaded `d5436d50-...` (Avocado Toast Tartine, converted to JPG as `pistachio-avocado-toast-tartine-new-haven.jpg`) to Mohamad's GoDaddy media library and attached it to the "Best Avocado Toast Tartine" card; it is not visible on the page in this layout.
- To show photos, Mohamad (or we, on his OK) must switch that section to an image-capable layout or add an image/gallery section; this changes the page design, so it was left as a decision.
- Other photos in the list above were not uploaded. Nothing was published; Owner and Square untouched.

### Images placed in the GoDaddy draft (2026-11-20, draft only, nothing published)
Both sections were switched to the layout "Feature categories with images" (2-column cards, square photos). All text was re-checked after the change and is unchanged. Photos are Owner's own (from `media/originals/funnel/images`, converted to JPG for upload), with alt text added.
- **Breakfast** (page 1c651d0c-...): card 1 exterior `438a9a34`; card 2 avocado toast `d5436d50`; card 3 Arabic coffee `8a3093a4`; card 4 cozy mornings `63cba147`. Owner's YouTube video `EYx6P8TPI2c` is not embedded.
- **Our Story** (page 1451d848-...): card 2 "A Menu Experience Like No Other" `7d118de9`; card 3 "What Makes Pistachio Special" `842efd27`. Cards 1 and 4 have no Owner photo, so the placeholder stock photos were removed (text only).
- Not yet done: photos for Brunch, Halal, Birthdays, Press, Proudly Serving, Catering (see list above); same steps apply (change section layout, add photo per card, alt text). Uploaded images also sit in Mohamad's GoDaddy media library.
- Nothing was published; Owner, Square and DNS untouched.
