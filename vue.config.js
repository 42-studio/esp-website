module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "schedule-demo": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "schedule-demo.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "about/our-story": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "about/our-story.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "about/our-team": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "about/our-team.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "about/licensing": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "about/licensing.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "about/getting-in-contact": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "about/getting-in-contact.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "info/terms-conditions": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "info/terms-conditions.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "info/privacy-policy": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "info/privacy-policy.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "info/legal-notice": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "info/legal-notice.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    "404": {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "404.html",
      title: "ES Profiler | Enterprise Security Measured",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/app.scss";'
      }
    }
  },

  lintOnSave: false
};
