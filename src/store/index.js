import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import murations from './mutations'

Vue.use(Vuex)

const state = {
  auth: {
    token: null,
    userId: null
  },
  board: {
    lists: []
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  murations,
  strict: process.env.NODE_ENV !== 'production'
})
