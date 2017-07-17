import * as types from './mutation-types'

export default {
    [types.DATA_SOURCE_LIST](state, val) {
    	state.allDataSourceData = val;
    },
    [types.DEPARTMENT_INFO](state, val) {
    	state.allDepartmentData = val;
    },
    [types.PUSH_PACKAGES](state, val) {
    	state.pushPackages = val;
    },
    [types.JUMP_TARGET_LIST](state, val) {
    	state.allJumpPageData = val;
    },
    [SET_FORM_PAGE_DATA](state, items) {
        state.getFormPageData[item.ref] = items.value;
    },
    getActivityStatusList(state, val) {
        state.activityStatusList = val;
    }
}

