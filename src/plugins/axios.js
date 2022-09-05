import axios from 'axios'

export default {

  install (Vue) {
    // axios.defaults.withCredentials = true

    axios.defaults.baseURL = 'https://api.esprofiler.com/pes/v1/pub/'
    // axios.defaults.baseURL = 'http://172.16.0.46:8091/pes/v1/pub/'

    // const AuthHeader = process.env.VUE_APP_API_AUTH || null
    //
    // if (AuthHeader != null) {
    //   axios.defaults.headers.Authorization = AuthHeader
    // }

    Vue.prototype.$http = axios
  }

}
