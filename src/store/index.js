import Vue from 'vue'
import Vuex from 'vuex'
import dream from './modules/dream.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    dream,
    auth
  }
})