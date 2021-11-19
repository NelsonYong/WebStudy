import { defineConfig, Alias } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "components", replacement: resolve(__dirname, "src/components") },
    ],
  },
  server: {
    https: false,
  },
});
