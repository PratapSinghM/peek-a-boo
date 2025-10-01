import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: "/peek-a-boo/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
}));