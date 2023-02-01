module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'grid-pattern': "url('~/assets/img/grid.svg')"
      // }
    },
    plugins: [require("@tailwindcss/typography")],
    fontFamily: {
      sans: ['"Exo 2"', "sans-serif"],
    },
  },
};
