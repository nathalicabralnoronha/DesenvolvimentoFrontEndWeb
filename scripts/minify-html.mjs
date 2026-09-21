import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";
import { minify } from "html-minifier-terser";

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const htmlFiles = walk("dist").filter((path) => extname(path) === ".html");

for (const file of htmlFiles) {
  const original = readFileSync(file, "utf8");
  const result = await minify(original, {
    collapseWhitespace: true,
    conservativeCollapse: false,
    removeComments: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: false,
    useShortDoctype: true,
    sortAttributes: false,
    sortClassName: false,
    minifyCSS: true,
    minifyJS: true
  });
  writeFileSync(file, result);
}

console.log(`HTML minificado: ${htmlFiles.length} arquivo(s).`);
