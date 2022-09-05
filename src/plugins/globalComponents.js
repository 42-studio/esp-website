import Background from '../components/Background'
import BrandLogo from '../components/BrandLogo'
import BrandIcon from '../components/BrandIcon'
import DeviceLaptop from '../components/Device/Laptop'
import InputNewsletter from '../components/Input/Newsletter'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

export default {

  install (Vue) {
    Vue.component(DeviceLaptop.name, DeviceLaptop)
    Vue.component(Background.name, Background)
    Vue.component(BrandLogo.name, BrandLogo)
    Vue.component(BrandIcon.name, BrandIcon)
    Vue.component(InputNewsletter.name, InputNewsletter)
  }

}
