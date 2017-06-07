import Vue from 'vue'

/* eslint-disable no-new */
Vue.config.silent = true
window.Vue = Vue
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import App from './App'
new Vue({
  el: '#app',
  render: h => h(App)
})
