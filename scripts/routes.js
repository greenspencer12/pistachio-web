// Every route on the live pistachiocafe.com that the clone reproduces.
const ROUTES = [
  '/', '/locations', '/menu', '/1245-chapel-st', '/911-whalley-ave', '/menu/1245-chapel-st',
  '/catering', '/page/breakfast', '/page/brunch', '/page/birthdays--space-rentals', '/story',
  '/page/proudly-serving-new-haven', '/events', '/careers', '/page/press',
  '/page/contact-us--locations', '/terms', '/privacy', '/accessibility', '/page/halal-at-pistachio',
];

function slug(r) { return r === '/' ? 'home' : r.slice(1).replace(/\//g, '__'); }

module.exports = { ROUTES, slug };
