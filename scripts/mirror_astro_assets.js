// Mirrors every /_astro/* and /images/* file the captured pages use into public/,
// following JS/CSS imports recursively. Files are fetched from inside a real
// browser tab on the live origin because Cloudflare rejects plain HTTP clients.
// Usage: node scripts/mirror_astro_assets.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.dirname(__dirname);
const LIVE_DIR = path.join(ROOT, 'content', 'live');
const OUT = path.join(ROOT, 'public');

const REF = /\/(?:_astro|images)\/[A-Za-z0-9_.@\-]+\.(?:js|css|woff2?|ttf|svg|png|jpe?g|webp|avif)/g;
// Relative imports inside chunks, e.g. from"./client.abc.js" or import("./x.js")
const REL = /["'`]\.\/([A-Za-z0-9_.@\-]+\.(?:js|css))["'`]/g;

(async () => {
  // Root-level files the chunks load by absolute path (PDF.astro sets workerSrc to this).
  const queue = new Set(['/pdf.worker.min.js']);
  for (const f of fs.readdirSync(LIVE_DIR)) {
    for (const m of fs.readFileSync(path.join(LIVE_DIR, f), 'utf-8').matchAll(REF)) queue.add(m[0]);
  }

  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true,
  });
  const page = await (await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  })).newPage();
  await page.goto('https://pistachiocafe.com/', { waitUntil: 'domcontentloaded' });

  const done = new Set();
  let failed = 0;
  while (queue.size) {
    const url = queue.values().next().value;
    queue.delete(url);
    if (done.has(url)) continue;
    done.add(url);
    const res = await page.evaluate(async (u) => {
      const r = await fetch(u);
      const buf = new Uint8Array(await r.arrayBuffer());
      let bin = '';
      for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
      return { status: r.status, b64: btoa(bin) };
    }, url);
    if (res.status !== 200) { console.log('FAIL', res.status, url); failed++; continue; }
    const data = Buffer.from(res.b64, 'base64');
    const dest = path.join(OUT, url);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, data);
    if (/\.(js|css)$/.test(url)) {
      const text = data.toString('utf-8');
      for (const m of text.matchAll(REF)) if (!done.has(m[0])) queue.add(m[0]);
      for (const m of text.matchAll(REL)) { const u = '/_astro/' + m[1]; if (!done.has(u)) queue.add(u); }
    }
  }
  console.log(`mirrored ${done.size - failed} files, ${failed} failed`);
  await browser.close();
})();
