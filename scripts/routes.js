// Every real (HTTP 200) page on the live pistachiocafe.com, from live_source/manifest.json
// (written by scripts/capture_site.js). Redirects and 404s are in the same manifest.
const fs = require('fs'), path = require('path');
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'live_source', 'manifest.json'), 'utf-8'));
const ROUTES = manifest.pages;
function slug(r) { return r === '/' ? 'home' : r.slice(1).replace(/\//g, '__'); }
module.exports = { ROUTES, slug, manifest };
