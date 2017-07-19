import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    getFormData: {}
}

const getters = {}

const actions = {}

const mutations = {
    setFormData(state, items) {
        state.getFormPageData[items.ref] = items.value;
    }
}
debugger
export default new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    }
)
