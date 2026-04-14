import Vue from 'vue'
import Vuex from 'vuex'
import { bgconfig } from './bigscreen.js'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bgconfig
  },
  getters
})

export default store
