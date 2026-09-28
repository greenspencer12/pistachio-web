/** @type {import('next').NextConfig} */

// All assets the captured live markup uses are self-hosted — nothing is loaded
// from pistachiocafe.com/Owner.com at runtime:
//   /_astro/*, /pdf.worker.min.js   public/ (scripts/mirror_astro_assets.js)
//   /pluto-images/*                app/pluto-images/[...path]/route.ts over media/originals
//   /pluto-videos/*, /static-maps/* public/ (scripts/mirror_media.js)
//   /documents/*.pdf               public/documents
const nextConfig = {};

export default nextConfig;
