import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'
import Axios from './plugins/axios'
import PortalVue from 'portal-vue'
import VModal from '@/components/Modals/VModal'

/* Import font awesome icons */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPeopleGroup,
  faBoxesStacked,
  faShieldHalved,
  faCircleNodes,
  faRankingStar,
  faEnvelope,
  faBomb
} from '@fortawesome/free-solid-svg-icons'

/* Add icons to the library */
library.add(faPeopleGroup, faBoxesStacked, faShieldHalved, faCircleNodes, faRankingStar, faEnvelope, faBomb)

/* Add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Argon)
Vue.use(Axios)
Vue.use(PortalVue)

Vue.component(VModal.name, VModal)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
