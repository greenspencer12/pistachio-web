import { readFileSync } from "fs";
import path from "path";

// Renders a page's captured live markup (see scripts/build_from_live.py).
// display:contents keeps the wrapper out of layout so the live CSS applies
// exactly as it does when this markup sits directly inside <body>.
export default function LivePage({ slug }: { slug: string }) {
  const html = readFileSync(path.join(process.cwd(), "content", "live", `${slug}.html`), "utf-8");
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
