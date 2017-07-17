let filterStore;
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
export default filterStore = {
    state,
    getters,
    actions,
    mutations
}
