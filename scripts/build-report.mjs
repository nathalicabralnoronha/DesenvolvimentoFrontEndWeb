import { statSync, readdirSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const sourceFiles = [
  "index.html",
  "html/index.html",
  "html/projetos.html",
  "html/cadastro.html",
  "css/style.css",
  "js/templates.js",
  "js/storage.js",
  "js/validacao.js",
  "js/script.js"
];

function bytes(paths) {
  return paths.reduce((total, path) => total + statSync(path).size, 0);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const outputFiles = walk("dist").filter((path) =>
  [".html", ".css", ".js"].includes(extname(path))
);

const sourceBytes = bytes(sourceFiles);
const outputBytes = bytes(outputFiles);
const reduction = ((1 - outputBytes / sourceBytes) * 100);

const htmlSource = bytes(sourceFiles.filter((p) => p.endsWith(".html")));
const htmlOutput = bytes(outputFiles.filter((p) => p.endsWith(".html")));
const cssSource = bytes(sourceFiles.filter((p) => p.endsWith(".css")));
const cssOutput = bytes(outputFiles.filter((p) => p.endsWith(".css")));
const jsSource = bytes(sourceFiles.filter((p) => p.endsWith(".js")));
const jsOutput = bytes(outputFiles.filter((p) => p.endsWith(".js")));

function pct(before, after) {
  return ((1 - after / before) * 100).toFixed(2);
}

const text = [
  "RELATORIO DE BUILD - ONG ESPERANCA SOLIDARIA",
  `Fonte HTML/CSS/JS: ${sourceBytes} bytes`,
  `Dist HTML/CSS/JS: ${outputBytes} bytes`,
  `Reducao total: ${reduction.toFixed(2)}%`,
  `HTML: ${htmlSource} -> ${htmlOutput} bytes (${pct(htmlSource, htmlOutput)}%)`,
  `CSS: ${cssSource} -> ${cssOutput} bytes (${pct(cssSource, cssOutput)}%)`,
  `JS: ${jsSource} -> ${jsOutput} bytes (${pct(jsSource, jsOutput)}%)`
].join("\n");

writeFileSync("dist/build-report.txt", text + "\n");
console.log("\n" + text + "\n");
