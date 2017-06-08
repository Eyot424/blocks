export default {
    log: {
        vuex: { //vuex.store
            state: {
                count: 0
            },
            getters: {},
            mutations: {
                increment(state) {
                    state.count++
                }
            },
            actions: {
                increment(context) {
                    context.commit('increment')
                }
            }
        },
        extend: {},
        data: {
            props: {
                customFetch(){

                }
            }
        }
    }
}
