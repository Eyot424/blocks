import * as types from './mutation-types'

export default {
    [types.SERVER_RESULT](state, {data}){
        state.logData = data.items;
        state.total = data.total;
    },
    [types.PAGE_CHANGE](state, val){
        state.currentPage = val;
    },
}

