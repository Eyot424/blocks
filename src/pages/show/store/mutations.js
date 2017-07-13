import * as types from './mutation-types'

export default {
    [types.DATA_SOURCE_LIST](state, val) {
    	state.allCheckData = val;
    },
    [types.DEPARTMENT_INFO](state, val) {
    	state.allData = val;
    }
}

