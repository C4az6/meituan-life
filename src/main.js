import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
// import router from './router'
import 'style/resets.css'
import 'style/border.css'
import 'style/common.scss'
import 'js/fastclick.js'
import 'js/common.js'

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')
