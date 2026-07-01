import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Add this block to force the CommonJS -> ESM conversion
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      "@shipments/css": `${process.env.SHIPMENTS_CSS_PATH || "/css"}/index.css`,
    },
  },
});
