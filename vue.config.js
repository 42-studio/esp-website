module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'ESPROFILER | Revolutionizing Enterprise Security Investment',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'schedule-demo': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'schedule-demo.html',
      title: 'ESPROFILER | Schedule a Demo',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about/our-story': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'about/our-story.html',
      title: 'ESPROFILER | Our Story',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about/our-team': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'about/our-team.html',
      title: 'ESPROFILER | Team',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about/licensing': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'about/licensing.html',
      title: 'ESPROFILER | Licensing',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about/getting-in-contact': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'about/getting-in-contact.html',
      title: 'ESPROFILER | Contact',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'info/terms-conditions': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'info/terms-conditions.html',
      title: 'ESPROFILER | Terms & Conditions',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'info/privacy-policy': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'info/privacy-policy.html',
      title: 'ESPROFILER | Privacy Policy',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'info/legal-notice': {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'info/legal-notice.html',
      title: 'ESPROFILER | Legal Notice',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
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
}
