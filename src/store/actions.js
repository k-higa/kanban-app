import { AUth } from '../api'
import {AUTH_LOGIN} from '../store/mutation-types'

export default {
  login: ({commit}, authInfo) => {
    return AUth.login(authInfo)
      .then(({token, userId}) => {
        commit(AUTH_LOGIN, {token, userId})
      }).catch(err => { throw err })
  },
  fetchList: ({ commit }) => {
    // TODO
    throw new Error('fetchList action should be implementd')
  },
  addTask: ({ commit }) => {
    // TODO
    throw new Error('addTask action should be implmented')
  },
  updateTask: ({ commit }) => {
    // TODO
    throw new Error('updateTask action should be implmented')
  },
  removeTask: ({ commit }) => {
    // TODO
    throw new Error('removeTask action should be implmented')
  },
  logout: ({ commit }) => {
    // TODO
    throw new Error('logout action should be implemented')
  }
}
