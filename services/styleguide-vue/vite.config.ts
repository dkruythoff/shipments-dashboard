import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@shipments/css": `${process.env.SHIPMENTS_CSS_PATH || "/css"}/index.css`,
    },
  },
});
