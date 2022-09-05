module.exports = {

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/app.scss";'
      }
    }
  },

  lintOnSave: false
}
