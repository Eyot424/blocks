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
            state.total = 1000;
        }
    },
    [types.CHANGE_TOTAL_NUM](state,val) {
        if(!state.total) {
            alert('请先选择数据来源和活动城市');
        } else if(val > state.total) {
            alert('人数不能大于总人数');
        } else {
            state.ruleForm.totalNum = val;
        }
    },
    [types.CHANGE_DISPLAY_TYPE](state,val) {
        state.ruleForm.dispatchType = val;
    },
    [types.GET_ACTIVITY_NAME](state,val) {
        state.ruleForm.name = val;
    },
    [types.GET_SUBMIT_DATA](state) {
        console.log(state.ruleForm);
    },
    [types.GET_DEPARTMENT_VALUE](state,val) {
        state.ruleForm.department = val;
    },
    [types.CHANGE_COUPON_DATE](state,val) {
        state.ruleForm.couponDate = val;
    },
    //dialog
    [types.CHANGE_PUSH_FLAG](state,val) {
        state.rulePackageForm.isPushContent = val;
    },
    [types.GET_PUSH_CONTENT](state,val) {
        state.rulePackageForm.pushContent = val;
    },
    [types.GET_SMS_CONTENT](state,val) {
        state.rulePackageForm.smsContent = val;
    },
    [types.GET_PUSH_TIME](state,val) {
        console.log(val);
        state.rulePackageForm.pushStartTime = val[0];
    },
    [types.GET_JUMP_TARGET_VALUE](state,val) {
        state.rulePackageForm.jumpTarget = val;
    },
    [types.GET_PUSH_LINK](state,val) {
        if(val) {
            state.rulePackageForm.jumpTarget = val;
        }
    },
    [types.CHANGE_SMS_FLAG](state,val) {
        state.rulePackageForm.isSmsContent = val;
    },
    [types.GET_SMS_TIME](state,val) {
        debugger
        state.rulePackageForm.smsStartTime = val[0];
    },
    [types.GET_USER_NUM](state,val) {
        state.rulePackageForm.userNum = val || 0;
    },
    [types.GET_DIALOG_SUBMIT_DATA](state) {
        console.log(state.rulePackageForm);
    }
}
