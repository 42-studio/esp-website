// import '@/app.scss'
// import '@/assets/scss/argon-design-system.scss'
import '@/assets/vendor/font-awesome/css/all.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import globalDirectives from './globalDirectives'
import globalComponents from './globalComponents'

export default {
  install (Vue) {
    // Make BootstrapVue available throughout your project
    Vue.use(BootstrapVue)

    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)

    Vue.use(globalDirectives)
    Vue.use(globalComponents)
  }
}
