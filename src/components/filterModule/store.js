import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
    getFormData: {}
}
const getters = {

}

const actions = {
    
}

const mutations = {
    setFormData: (state, items) => {
        state.getFormData[items.ref] = items.value
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
