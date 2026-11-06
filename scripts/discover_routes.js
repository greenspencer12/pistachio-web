// Builds the full list of live routes: every URL in /sitemap.xml plus every internal
// link found in the captured pages. Writes live_source/routes.json.
// Usage: node scripts/discover_routes.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const RAW = path.join(path.dirname(__dirname), 'live_source', 'raw');
(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const p = await (await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' })).newPage();
  const xml = await (await p.goto('https://pistachiocafe.com/sitemap.xml')).text();
  const sitemap = [...xml.matchAll(/<loc>https:\/\/pistachiocafe\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
  const links = new Set();
  for (const f of fs.readdirSync(RAW)) {
    const html = fs.readFileSync(path.join(RAW, f), 'utf-8');
    for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) links.add(m[1]);
    for (const m of html.matchAll(/href="https:\/\/pistachiocafe\.com(\/[^"#?]*)/g)) links.add(m[1]);
  }
  const skip = /^\/(_astro|pluto-|images|static-maps|documents|login|api|internal|cdn-cgi)/;
  const all = [...new Set([...sitemap, ...links])].filter((r) => !skip.test(r) && !/\.(png|jpe?g|svg|webp|avif|ico|pdf|js|css|txt|xml|json|md|mp4|webm)$/i.test(r)).sort();
  const status = {};
  for (const r of all) {
    const res = await p.goto('https://pistachiocafe.com' + r, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(() => null);
    status[r] = res ? res.status() : 0;
  }
  fs.writeFileSync(path.join(path.dirname(RAW), 'routes.json'), JSON.stringify({ sitemap, status }, null, 1));
  const by = {}; for (const [r, s] of Object.entries(status)) (by[s] ||= []).push(r);
  console.log('sitemap urls:', sitemap.length, '| discovered:', all.length);
  for (const [s, rs] of Object.entries(by)) console.log(s, rs.length, rs.filter((r) => !r.startsWith('/tags/')).join(' '), rs.some((r) => r.startsWith('/tags/')) ? `(+${rs.filter((r) => r.startsWith('/tags/')).length} tags)` : '');
  await b.close();
})();
