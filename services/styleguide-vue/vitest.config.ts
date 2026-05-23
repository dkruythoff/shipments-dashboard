import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@shipments/css": `${process.env.SHIPMENTS_CSS_PATH || "/css"}/index.css`,
    },
  },
  optimizeDeps: {
    include: ["vue"],
  },
  test: {
    setupFiles: ["./src/test-setup.ts"],
    exclude: ["node_modules/**", "scripts/**"],
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [
        { browser: "chromium" },
        { browser: "firefox" },
        { browser: "webkit" },
      ],
      viewport: { width: 1280, height: 768 },
      expect: {
        toMatchScreenshot: {
          comparatorName: "pixelmatch",
          comparatorOptions: { threshold: 0.2, allowedMismatchedPixels: 100 },
          resolveScreenshotPath: ({
            arg,
            browserName,
            ext,
            platform,
            testFileDirectory,
            testFileName,
          }) =>
            `${testFileDirectory}/__screenshots__/${testFileName.split(".")[0]}-${arg}-${browserName}-${platform}${ext}`,
        },
      },
    },
  },
});
