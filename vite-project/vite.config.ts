/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
    coverage: {
      provider: "v8",
      all: true,
      reporter: "text",
      include: ["**/*.tsx", "**/*.ts"],
      exclude: ["**/*.d.ts", "./src/App.tsx", "./src/main.tsx"],
    },
  },
});
