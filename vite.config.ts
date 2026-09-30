import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { UserConfig as VitestUserConfig } from "vitest/config";

type ViteVitestConfig = Parameters<typeof defineConfig>[0] & {
  test?: VitestUserConfig["test"];
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
} as ViteVitestConfig);
