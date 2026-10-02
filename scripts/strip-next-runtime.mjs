// O site é estático e não tem componentes de cliente: o HTML exportado já está
// completo. Remove o runtime do Next/React (chunks, preloads e payload RSC) para
// não baixar nem executar JavaScript desnecessário.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = "out";

const patterns = [
  /<script src="\/_next\/[^"]*"[^>]*><\/script>/g,
  /<link rel="preload" as="script"[^>]*\/>/g,
  /<script>\(?self\.__next_f[\s\S]*?<\/script>/g,
];

for (const entry of await readdir(outDir, { recursive: true })) {
  if (!entry.endsWith(".html")) continue;
  const file = join(outDir, entry);
  const html = await readFile(file, "utf8");
  const stripped = patterns.reduce((acc, pattern) => acc.replace(pattern, ""), html);
  if (/_next\/static\/chunks\/[^"]*\.js|__next_f/.test(stripped)) {
    throw new Error(`Runtime do Next ainda presente em ${file}`);
  }
  await writeFile(file, stripped);
}
