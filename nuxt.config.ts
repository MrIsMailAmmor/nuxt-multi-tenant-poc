import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: { plugins: ["@/server/plugins/tenant"] },
  compatibilityDate: "2025-05-15",
});
