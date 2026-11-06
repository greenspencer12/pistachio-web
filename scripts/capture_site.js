// Captures the whole live site: raw server HTML for every real page, plus a manifest
// of redirects and 404s. Usage: node scripts/capture_site.js [outDir=live_source/raw]
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const { slug } = require('./routes');
const out = process.argv[2] || 'live_source/raw';
const PLACES = ['west-haven','whitneyville','beaver-hills','west-river','newhallville','downtown','spring-glen','dixwell','edgewood','woodbridge','prospect-hill','amity','west-rock','hamden','east-haven','wooster-square-mill-river','augerville','hill','orange','westville','dwight','east-rock','new-haven','bethany','north-haven','branford','milford','cheshire','guilford','fair-haven'];
const EXTRA = ['/locations','/about','/contact','/rewards','/events','/places','/menu/1245-chapel-st','/page/breakfast','/page/brunch','/page/birthdays--space-rentals','/story','/page/proudly-serving-new-haven','/careers','/page/press','/page/contact-us--locations','/terms','/privacy','/accessibility','/page/halal-at-pistachio','/menu','/catering','/911-whalley-ave','/1245-chapel-st','/does-not-exist-404-probe'];
(async () => {
  const r = require('../live_source/routes.json');
  const set = new Set(['/', ...r.sitemap, ...Object.keys(r.status), ...EXTRA, ...PLACES.map(p => '/places/' + p)]);
  const paths = [...set].map(p => p.replace(/^https?:\/\/[^/]+/, '')).filter(p => p.startsWith('/') && !/\.(xml|txt|json|md)$/.test(p)).sort();
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const p = await (await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' })).newPage();
  const manifest = { pages: [], redirects: {}, notFound: {} };
  for (const u of paths) {
    let res;
    for (let i = 0; i < 3 && !res; i++) { try { res = await p.goto('https://pistachiocafe.com' + u, { waitUntil: 'domcontentloaded', timeout: 45000 }); } catch (e) { if (i == 2) console.log('FAIL', u, e.message); } }
    if (!res) continue;
    const first = res.request().redirectedFrom(); let root = first; while (root && root.redirectedFrom()) root = root.redirectedFrom();
    if (root) { const rr = await root.response(); manifest.redirects[u] = { status: rr.status(), location: rr.headers()['location'] }; console.log('REDIR', rr.status(), u, '->', rr.headers()['location']); continue; }
    const body = await res.text();
    if (res.status() === 200) { fs.writeFileSync(path.join(out, slug(u) + '.html'), body); manifest.pages.push(u); console.log('OK   ', u, body.length); }
    else { manifest.notFound[u] = { status: res.status(), contentType: res.headers()['content-type'], body: body.length < 400 ? body : undefined }; console.log(res.status(), u, body.length); }
  }
  fs.writeFileSync('live_source/manifest.json', JSON.stringify(manifest, null, 1));
  await b.close();
})();
