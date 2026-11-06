// Serves the captured live pistachiocafe.com site verbatim (see scripts/build_site.py):
// real pages, the live redirects, the styled 404, and robots/sitemap/llms/agents files.
import { readFileSync } from "fs";
import path from "path";

export const dynamic = "force-static";
export const dynamicParams = true;

const C = path.join(process.cwd(), "content");
const manifest: { pages: string[]; redirects: Record<string, { status: number; location: string }> } =
  JSON.parse(readFileSync(path.join(C, "manifest.json"), "utf-8"));
const staticMeta: Record<string, { status: number; contentType: string; cacheControl: string; file: string }> =
  JSON.parse(readFileSync(path.join(C, "static", "_meta.json"), "utf-8"));
const pages = new Set(manifest.pages);
const noindex = process.env.PREVIEW_NOINDEX === "1";
const slugOf = (p: string) => (p === "/" ? "home" : p.slice(1).replace(/\//g, "__"));

export function generateStaticParams() {
  return manifest.pages.map((p) => ({ slug: p === "/" ? [] : p.slice(1).split("/") }));
}

function respond(body: BodyInit | Buffer | null, status: number, contentType: string, extra: Record<string, string> = {}) {
  const headers: Record<string, string> = { "content-type": contentType, ...extra };
  if (noindex) headers["x-robots-tag"] = "noindex, nofollow";
  return new Response(Buffer.isBuffer(body) ? new Uint8Array(body) : body, { status, headers });
}

export async function GET(_req: Request, { params }: { params: { slug?: string[] } }) {
  const raw = "/" + (params.slug ?? []).map(decodeURIComponent).join("/");
  const route = raw.length > 1 ? raw.replace(/\/$/, "") : raw;

  // Preview hosts must stay out of search results; production serves the live robots.txt.
  if (route === "/robots.txt" && noindex) return respond("User-agent: *\nDisallow: /\n", 200, "text/plain; charset=utf-8");
  const sm = staticMeta[route];
  if (sm && sm.status === 200) {
    return respond(readFileSync(path.join(C, "static", sm.file)), 200, sm.contentType, { "cache-control": sm.cacheControl });
  }
  const rd = manifest.redirects[route];
  if (rd) return respond(null, rd.status, "text/plain", { location: rd.location });
  if (pages.has(route)) {
    return respond(readFileSync(path.join(C, "docs", slugOf(route) + ".html")), 200, "text/html; charset=utf-8", {
      "cache-control": "public, max-age=0, must-revalidate",
    });
  }
  if (route === "/events") return respond("Not found", 404, "text/plain;charset=UTF-8", { "cache-control": "private, no-store" });
  return respond(readFileSync(path.join(C, "docs", "_404.html")), 404, "text/html", { "cache-control": "private, no-store" });
}
