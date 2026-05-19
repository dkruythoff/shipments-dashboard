import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@shipments/ui":
        process.env.SHIPMENTS_UI_PATH || "../styleguide-vue/src/components",
    },
  },
});
