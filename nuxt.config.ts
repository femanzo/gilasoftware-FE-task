import presetWebFonts from "@unocss/preset-web-fonts";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@unocss/nuxt"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    webFonts: {
      provider: "google", // default provider
      fonts: {
        sans: "Roboto",
        menu: ["Inter:200,400,500,600,800"],
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    },
    shortcuts: [],
    rules: [],
    typography: true,
  },
  nitro: {
    devProxy: {
      "/api": "http://localhost:3001",
    },
  },
});
