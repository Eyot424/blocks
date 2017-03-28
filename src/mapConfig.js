import store from './store'
export default {
    table: {
        vuex: { //vuex.store
            state: {
                count: 0
            },
            getters: {
                ...
            }
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
        extend: {

        },
    },
    button: {
        data: {
            on: {
                click: function() {
                    store.commit('clear')
                }
            }
        }
    }
}
