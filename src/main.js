import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import Axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  store,
  router,
  created () {
    //this.$store.dispatch('dream/getDreams')
  },
  render: h => h(App),
}).$mount('#app')
