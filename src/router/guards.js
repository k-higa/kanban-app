import store from '../store'

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    /** 本来はバックエンドでtokenを検証するべきだが時間がないのでやらない */
    if (!store.state.auth || !store.state.auth.token) {
      next({path: '/login'})
    } else {
      next()
    }
  } else {
    next()
  }
}
