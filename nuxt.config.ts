import { guestRoutes } from "./data/guestRoutes";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: "Свадьба Тани и Ильи",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Приглашение на свадьбу" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/vite.svg" }],
    },
  },
  modules: ["@nuxt/image"],
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: guestRoutes,
    },
  },
});
