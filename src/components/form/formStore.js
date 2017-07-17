let formStore;

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
export default formStore = {
    state,
    getters,
    actions,
    mutations
}
