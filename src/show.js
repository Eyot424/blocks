import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import show from './showPage'


/* eslint-disable no-new */
window.Vue = Vue;
Vue.config.silent = true
new Vue({
    el: '#show',
    store,
    render: (h) => {
        return h(show)
    }
})
