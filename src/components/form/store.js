import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
    getFormPageData: {}
}
const getters = {

}

const actions = {

}

const mutations = {
    setFormPageData: (state, items) => {
        state.getFormPageData[items.ref] = items.value
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
