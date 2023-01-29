import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'style/resets.css'
import 'style/border.css'
import 'style/common.scss'
import 'style/iconfont.css'
import FastClick from 'js/fastclick.js'
import 'js/common.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
