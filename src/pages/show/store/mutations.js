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
    [types.SET_FORM_PAGE_DATA](state, items) {
        state.getFormPageData[items.ref] = items.value;
    },
    [types.SET_FORM_DATA](state, items) {
        state.getFormData[items.ref] = items.value;
    },
    [types.CREATE_PACKAGE_DIALOG](state) {
        state.packageDialogShow = true;
    },
    [types.CLOSE_PACKAGE_DIALOG](state) {
        state.packageDialogShow = false;
    },
    [types.GET_SELECTED_DATA_SOURCES](state,value) {
        state.ruleForm.sources = value;
        if(state.ruleForm.sources.length > 0 && state.ruleForm.cityIds.length > 0) {
            console.log(state.ruleForm.sources);
            console.log(state.ruleForm.cityIds);
            state.total = 1000;
        }
    },
    [types.GET_SELECTED_CITY_IDS](state,value) {
        state.ruleForm.cityIds = value;
        if(state.ruleForm.sources.length > 0 && state.ruleForm.cityIds.length > 0) {
            console.log(state.ruleForm.sources);
            console.log(state.ruleForm.cityIds);
            debugger
            state.total = 1000;
        }
    }
}
