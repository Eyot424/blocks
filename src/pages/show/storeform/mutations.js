import * as types from './mutation-types'
//时间格式转换
function gmtFormat(day) { 
  var fmt = "yyyy-MM-dd HH:mm:ss";
  var o = {   
    "M+" : day.getMonth()+1,                 //月份   
    "d+" : day.getDate(),                    //日   
    "H+" : day.getHours(),                   //小时   
    "m+" : day.getMinutes(),                 //分   
    "s+" : day.getSeconds(),                 //秒   
    "q+" : Math.floor((day.getMonth()+3)/3), //季度   
    "S"  : day.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (day.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
} 
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
    [types.EDIT_PACKAGE_DIALOG](state,param) {
        state.packageDialogShow = true;
        if(param) {
            state.rulePackageForm.pushTime = [new Date(state.rulePackageForm.push_start_time * 1000),
            new Date(state.rulePackageForm.push_end_time * 1000)];
            state.rulePackageForm.smsTime = [new Date(state.rulePackageForm.sms_start_time * 1000),
            new Date(state.rulePackageForm.sms_end_time * 1000)];
        }
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
        debugger
        state.dispatchType = Number(val);
        state.ruleForm.dispatchType = val;
        if(val === '2') {
            state.userNumDisabled = true;
        } else {
            state.userNumDisabled = false;
        }
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
        if(val == 2) {
            state.pushContentDisabled = true;
            state.pushTimeDisabled = true;
            state.pushLinkDisabled = true;
            state.pushJumpTargetDisabled = true;
        } else {
            state.pushContentDisabled = false;
            state.pushTimeDisabled = false;
            state.pushLinkDisabled = false;
            state.pushJumpTargetDisabled = false;
        }
    },
    [types.SET_PUSH_CONTENT](state,val) {
        state.rulePackageForm.push_content = val;
    },
    [types.SET_SMS_CONTENT](state,val) {
        state.rulePackageForm.sms_content = val;
    },
    [types.SET_PUSH_TIME](state,val) {
        // if(val && val.length > 0 ) {
        //     state.rulePackageForm.push_start_time = (val[0] && val[0].getTime()) ? val[0].getTime() / 1000 : '';
        //     state.rulePackageForm.push_end_time = (val[1] && val[1].getTime()) ? val[1].getTime() / 1000 : '';
        //     state.pushTime = val;
        // }
        state.pushTime = val;
    },
    [types.SET_JUMP_TARGET_VALUE](state,val) {
        state.rulePackageForm.push_jump_target = val;
        if(val === 'bdwm') {
            state.pushLinkDisabled = false;
        } else {
            state.pushLinkDisabled = true;
        }
    },
    [types.SET_PUSH_LINK](state,val) {
        if(val) {
            state.rulePackageForm.push_jump_target = val;
        }
    },
    [types.CHANGE_SMS_FLAG](state,val) {
        state.rulePackageForm.isSmsContent = val;
        if(val == 2) {
            state.smsContentDisabled = true;
            state.smsTimeDisabled = true;
        } else {
            state.smsContentDisabled = false;
            state.smsTimeDisabled = false;
        }
    },
    [types.SET_SMS_TIME](state,val) {
        // if(val && val.length) {
        //     state.rulePackageForm.sms_start_time = (val[0] && val[0].getTime()) ? val[0].getTime() / 1000 : '';
        //     state.rulePackageForm.sms_end_time = (val[1] && val[1].getTime()) ? val[1].getTime() / 1000 : '';
        //     state.smsTime = val;
        // }
        state.smsTime = val;
    },
    [types.SET_USER_NUM](state,val) {
        state.rulePackageForm.user_num = val || 0;
    },
    [types.GET_DIALOG_SUBMIT_DATA](state) {
        console.log(state.rulePackageForm)
        if(!state.rulePackageForm.id) {//create
            state.rulePackageForm.id = 123;
            state.tableData.push(state.rulePackageForm);
            state.packageIds.push(state.rulePackageForm.id);
        } else {//update

        }
        state.packageDialogShow = false;
    },
    //table
    [types.GET_PUSH_PACKAGES](state,val) {
        console.log(state.tableData)
    },
    [types.DELETE_PACKAGE](state,index) {
        state.tableData.splice(index);
        state.packageIds.splice(index);
    },
    [types.COUPON_DATE_FORMAT](state,val) {
        debugger
        val = gmtFormat(val);
        return val
    }
}
