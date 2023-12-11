import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  // root: 'src',
  build: {
    outDir: "dist",
  },
  plugins: [react(), eslint()],
  // if you need to specify another host/port
  server: {
    //   host: '127.0.0.1',
    port: 1234,
  },
});
