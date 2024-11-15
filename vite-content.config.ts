import { defineConfig } from "vite";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

export default defineConfig({
  build: {
    emptyOutDir: false,
    target: "node16",
    rollupOptions: {
      input: Object.fromEntries(
        globSync("src/content-scripts/**/*.ts").map((file) => [
          //writes to just assets/content-scripts
          path.relative(
            "src",
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        format: "es",
        dir: "dist/assets",
        entryFileNames: "[name].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
