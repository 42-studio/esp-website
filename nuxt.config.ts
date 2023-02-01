// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // default
    },
    head: {
      title: "ESPROFILER | Continuous Security Investment Validation",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/icons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/icons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/icons/favicon-16x16.png",
        },
        {
          rel: "mask-icon",
          href: "/icons/safari-pinned-tab.svg",
          color: "#bd3dde",
        },
        {
          rel: "shortcut icon",
          href: "/icons/favicon.ico",
        },
      ],
      meta: [
        {
          charset: "utf-8",
        },
        {
          hid: "description",
          name: "description",
          content:
            "An enterprise platform for continuous assurance of security investments against threats.",
        },
        {
          name: "msapplication-TileColor",
          content: "#da532c",
        },
        {
          name: "msapplication-config",
          content: "/icons/browserconfig.xml",
        },
        {
          name: "theme-color",
          content: "#ffffff",
        },
      ],
    },
  },
  modules: ["@nuxt/content"], // https://tailwindcss.nuxt.dev/,
  runtimeConfig: {
    public: {
      pes:
        process.env.NODE_ENV === "production"
          ? "https://api.esprofiler.com/pes/v1/pub"
          : "http://localhost:8991/pes/v1/pub",
    },
  },
  // tailwindcss: {
  //   viewer: true,
  //   cssPath: "~/assets/css/tailwind.css",
  // },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
