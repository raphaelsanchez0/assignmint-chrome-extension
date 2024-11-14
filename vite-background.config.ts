import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    target: "node16",
    rollupOptions: {
      input: {
        background: resolve(__dirname, "src/background/background.ts"),
      },
      output: {
        entryFileNames: "assets/background/[name].js",
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
