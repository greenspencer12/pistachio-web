// Captures the live site's non-HTML files into content/static/ and records their content types.
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
const FILES = ['/robots.txt','/sitemap.xml','/llms.txt','/agents.md','/.well-known/poppy.json','/events','/does-not-exist-404-probe'];
(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const p = await (await b.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' })).newPage();
  const meta = {}; fs.mkdirSync('content/static', { recursive: true });
  for (const f of FILES) {
    const r = await p.goto('https://pistachiocafe.com' + f, { waitUntil: 'domcontentloaded' });
    const buf = await r.body(); const name = f.slice(1).replace(/\//g, '__');
    fs.writeFileSync(path.join('content/static', name), buf);
    meta[f] = { status: r.status(), contentType: r.headers()['content-type'], cacheControl: r.headers()['cache-control'], file: name, bytes: buf.length };
    console.log(f, JSON.stringify(meta[f]));
  }
  fs.writeFileSync('content/static/_meta.json', JSON.stringify(meta, null, 1)); await b.close();
})();
