import removeConsole from "vite-plugin-remove-console";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@pinia/nuxt", "@nuxtjs/leaflet", "@nuxt/eslint"],
  $production: {
    app: {
      baseURL: "/carte/",
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ["utils/validation"],
  },
  vite: {
    plugins: [removeConsole()],
  },
});
