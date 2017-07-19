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
        "dispatchType": '1',
        "cityIds": [
            "85",
            "731"
        ],
        "total": 0,
        "push_packages":[                   //文案包列表
            {
                "id":1001,                                      //文案包id
                "number":100,                                   //文案包人数
                "sms_content":"测试短信",                       //短信内容
                "sms_start_time":1499066195,                    //短信开始时间
                "sms_end_time":1499066195,                      //短信结束时间
                "push_content":"测试推送",                      //推送内容
                "push_start_time":1499066195,                   //推送开始时间
                "push_end_time":1499066195,                     //推送结束时间
                "push_jump_target":"bdwm://xxxx",               //推送跳转链接
                "sms_start_time_name":"2017/7/3 15:16:35",      //短信开始时间，用于展示
                "sms_end_time_name":"2017/7/3 15:16:35",        //短信结束时间，用于展示
                "push_start_time_name":"2017/7/3 15:16:35",     //推送开始时间，用于展示
                "push_end_time_name":"2017/7/3 15:16:35",       //推送结束时间，用于展示
                "push_jump_target_name":"我的代金券",            //推送跳转链接，用于展示
            }
        ]

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
        id: 1001,
        isPushContent: '1',
        push_content: '测试推送',
        push_jump_target: 'bdwm://xxxx',
        push_start_time: 1499066195,
        push_end_time: 1499066195,
        isSmsContent: '1',
        sms_content: '测试短信',
        sms_start_time: 1499066195,
        sms_end_time: 1499066195,
        user_num: 100
    },
    pushTime: [],
    smsTime: [],
    tableData: [                   //文案包列表
            // {
            //     "id":1001,                                      //文案包id
            //     "user_number":100,                                   //文案包人数
            //     "sms_content":"测试短信",                       //短信内容
            //     "sms_start_time":1499066195,                    //短信开始时间
            //     "sms_end_time":1499066195,                      //短信结束时间
            //     "push_content":"测试推送",                      //推送内容
            //     "push_start_time":1499066195,                   //推送开始时间
            //     "push_end_time":1499066195,                     //推送结束时间
            //     "push_jump_target":"bdwm://xxxx",               //推送跳转链接
            //     "sms_start_time_name":"2017/7/3 15:16:35",      //短信开始时间，用于展示
            //     "sms_end_time_name":"2017/7/3 15:16:35",        //短信结束时间，用于展示
            //     "push_start_time_name":"2017/7/3 15:16:35",     //推送开始时间，用于展示
            //     "push_end_time_name":"2017/7/3 15:16:35",       //推送结束时间，用于展示
            //     "push_jump_target_name":"我的代金券",            //推送跳转链接，用于展示
            // }
        ],
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
