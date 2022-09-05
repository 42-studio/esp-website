import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'
import Axios from './plugins/axios'
import PortalVue from 'portal-vue'
import VModal from '@/components/Modals/VModal'

Vue.config.productionTip = false

Vue.use(Argon)
Vue.use(Axios)
Vue.use(PortalVue)

Vue.component(VModal.name, VModal)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
