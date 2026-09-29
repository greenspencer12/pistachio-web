import { MetadataRoute } from 'next';

// Preview deployments (PREVIEW_NOINDEX=1) are verbatim copies of pistachiocafe.com
// and must never be indexed, or they would compete with the real site.
export default function robots(): MetadataRoute.Robots {
  if (process.env.PREVIEW_NOINDEX === '1') {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://pistachiocafe.com/sitemap.xml',
  };
}
