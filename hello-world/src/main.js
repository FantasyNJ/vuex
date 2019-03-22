import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rStore from './rStore'

Vue.config.productionTip = false

Vue.prototype.$store = rStore

window.haha = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
