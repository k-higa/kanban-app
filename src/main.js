import Vue from 'vue'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import router from './router'
import 'es6-promise/auto'
import store from './store'
Vue.config.productionTip = false

Vue.component(ErrorBoundary.name, ErrorBoundary)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
