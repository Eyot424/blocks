import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    allDataSourceData: [],
    allDepartmentData: [],
    pushPackages: [],
    allJumpPageData: [],
    getFormPageData: {},
    getFormData: {},
    packageDialogShow: false,
    dispatchType: 2,
    ruleForm: {
        "name": "活动名称",
        "sources": [
            "1",
            "2"
        ],
        "department": "9",
        "totalNumber": "",
        "totalNum": "10",
        "couponDate": "2017-07-21 20:45:56",
        "dispatchType": '2',
        "cityIds": [
            "85",
            "731"
        ],
        "total": 0,
        /*name: '',
        sources: [],
        department: '',
        totalNumber: '',
        totalNum: '',
        couponDate: '',
        dispatchType: 2,
        cityIds: [],
        total: 0*/
    },
    total: 0,
    dispatchType: 1,
    rulePackageForm: {
        id: '',
        isPushContent: 1,
        push_content: '',
        push_jump_target: '',
        push_start_time: '',
        push_end_time: '',
        isSmsContent: 1,
        sms_content: '',
        sms_start_time: '',
        sms_end_time: '',
        user_num: '',
        
    },
    pushTime: [],
    smsTime: [],
    tableData: [],
    packageIds: [],
    pushContentDisabled: false,
    pushJumpTargetDisabled: false,
    pushLinkDisabled: true,
    pushTimeDisabled: false,
    smsContentDisabled: false,
    smsTimeDisabled: false,
    userNumDisabled: false
}

export default new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    }
)
