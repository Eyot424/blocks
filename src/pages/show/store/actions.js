import * as types from './mutation-types'
export default {
    pageChange({commit}, val){
        commit(types.PAGE_CHANGE,val)
    }
}
