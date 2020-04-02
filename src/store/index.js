import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    getToken(state,token) {
      state.token = token
    }
  },
  actions: {

  },
  modules: {
    
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]
})