import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    // This allows Vercel to auto-detect "vercel" and Render to use "node-server"
    preset: process.env.NITRO_PRESET,
  },
});
