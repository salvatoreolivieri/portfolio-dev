// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Salvatore Olivieri Portfolio",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "This is my first Nuxt App",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["@/assets/style/app.scss"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    cssPath: "~/assets/style/app.scss",
    configPath: "tailwind.config.js",
    exposeConfig: false,

    injectPosition: 0,
    viewer: true,
  },
})
