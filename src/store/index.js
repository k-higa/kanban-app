import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import murations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  murations,
  strict: process.env.NODE_ENV !== 'production'
})
