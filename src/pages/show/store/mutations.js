import * as types from './mutation-types'

export default {
    [types.GET_ACTIVITY_STATUS_DATA](state, val) {
    	state.allActivityStatusData = val;
    }
}
