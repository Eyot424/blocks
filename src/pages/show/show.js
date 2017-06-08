import Vue from 'vue'
import store from './store'
import show from './showPage'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)


/* eslint-disable no-new */
window.Vue = Vue;
Vue.config.silent = true
new Vue({
    el: '#app',
    store,
    render: (h) => {
        return h(show)
    }
})
