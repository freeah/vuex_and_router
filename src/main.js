import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router/router.js'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
