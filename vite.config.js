import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    mimeTypes: {
      "font/otf": ["otf"],
      "font/woff": ["woff"],
      "font/woff2": ["woff2"],
    },
  },
});
