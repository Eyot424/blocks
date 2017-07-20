import Vue from 'vue'
import store from './store/index.js'
import show from './showPage'
import engine from '@/components/engine/engine.js'

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
