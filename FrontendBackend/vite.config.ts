import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Explicitly point to the server entry relative to the folder root
    server: { entry: "src/server.ts" },
  },
  nitro: {
    // Force 'vercel' preset to ensure Nitro generates the .vercel/output directory
    // correctly when building on the Vercel platform.
    preset: "vercel",
  },
});
