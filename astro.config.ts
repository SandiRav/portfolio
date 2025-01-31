import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from 'path'; // Add this line to import the 'path' module

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"), // Create the alias for the src folder
      },
    },
  },
});
