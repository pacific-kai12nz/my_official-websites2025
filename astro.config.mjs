import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import i18next from "astro-i18next";

export default defineConfig({
  integrations: [
    react(),
    i18next({
      defaultLocale: "ja",
      locales: ["ja", "en"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
