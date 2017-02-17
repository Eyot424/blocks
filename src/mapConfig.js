import store from './store'
export default {
    table: {
        vuex:{
            getters: {
                data: 'tableData'
            }
        },
        extend:{

        },
    },
    button:{
        data:{
            on:{
                click:function () {
                    store.commit('clear')
                }
            }
        }
    }
}