import { mkdir, readFile, writeFile } from "fs/promises";
import { createHash } from "crypto";
import path from "path";
import sharp from "sharp";

// Self-hosted stand-in for Owner.com's /pluto-images resizing CDN, which the
// captured markup references. Originals are mirrored into media/originals by
// scripts/mirror_media.js; variants are rendered on demand and cached on disk.
//   ?w=&h=   target size in CSS px (multiplied by dpr)
//   ?dpr=    device pixel ratio (default 1)
//   ?fit=    cover (crop to w×h) | contain (fit inside w×h)
//   ?format= png | auto (webp when accepted) — otherwise webp when accepted
export const runtime = "nodejs";

const ORIGINALS = path.join(process.cwd(), "media", "originals");
const CACHE = path.join(process.cwd(), ".cache", "pluto-images");

export async function GET(req: Request, { params }: { params: { path: string[] } }) {
  const rel = params.path.join("/");
  const file = path.join(ORIGINALS, rel);
  if (!file.startsWith(ORIGINALS)) return new Response("Bad path", { status: 400 });

  const q = new URL(req.url).searchParams;
  const dpr = Math.min(Math.max(Number(q.get("dpr")) || 1, 1), 3);
  const w = Number(q.get("w")) || undefined;
  const h = Number(q.get("h")) || undefined;
  const fit = q.get("fit") === "contain" ? "inside" : "cover";
  const webp = (req.headers.get("accept") ?? "").includes("image/webp");
  const format = q.get("format") === "png" ? "png" : webp ? "webp" : "jpeg";

  const key = createHash("sha1").update(`${rel}|${w}|${h}|${dpr}|${fit}|${format}`).digest("hex");
  const cached = path.join(CACHE, `${key}.${format}`);
  const headers = {
    "Content-Type": `image/${format}`,
    "Cache-Control": "public, max-age=31536000, immutable",
    Vary: "Accept",
  };

  try {
    return new Response(new Uint8Array(await readFile(cached)), { headers });
  } catch {}

  let input: Buffer;
  try {
    input = await readFile(file);
  } catch {
    return new Response("Not found", { status: 404 });
  }

  let img = sharp(input, { animated: false }).rotate();
  if (w || h) {
    img = img.resize({
      width: w ? Math.round(w * dpr) : undefined,
      height: h ? Math.round(h * dpr) : undefined,
      fit,
      withoutEnlargement: !(w && h && fit === "cover"),
    });
  }
  const out = await (format === "png" ? img.png() : format === "webp" ? img.webp({ quality: 82 }) : img.jpeg({ quality: 82, mozjpeg: true })).toBuffer();

  await mkdir(CACHE, { recursive: true });
  await writeFile(cached, out);
  return new Response(new Uint8Array(out), { headers });
}
