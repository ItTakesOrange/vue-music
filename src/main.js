import Vue from 'vue'
import router from './router'
import App from './App.vue'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
