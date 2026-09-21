import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/DesenvolvimentoFrontEndWeb/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    cssMinify: true,
    rollupOptions: {
      input: {
        root: resolve(process.cwd(), "index.html"),
        inicio: resolve(process.cwd(), "html/index.html"),
        projetos: resolve(process.cwd(), "html/projetos.html"),
        cadastro: resolve(process.cwd(), "html/cadastro.html")
      }
    }
  }
});
