// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        layoutTransition: {
            name: 'slide',
            mode: 'out-in' // default
        },
        head: {
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: true
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
                }
            ]
        }
    },
    modules: ['@nuxtjs/tailwindcss'], // https://tailwindcss.nuxt.dev/,
    runtimeConfig: {
      public: {
          pes: process.env.NODE_ENV === 'production' ? 'https://api.esprofiler.com/pes/v1/pub' : 'http://localhost:8991/pes/v1/pub'
      }
    },
    tailwindcss: {
        viewer: true
    }
})
