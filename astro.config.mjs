import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import i18next from "astro-i18next";

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    i18next({
      defaultLocale: "ja",
      locales: ["ja", "en"],
      i18nextOptions: { fallbackLng: "ja" },
    }),
  ],
});
