import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
