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
    ruleForm: {
        name: '',
        sources: [],
        department: '',
        // totalNumber: '',
        totalNum: '',
        couponDate: '',
        dispatchType: 2,
        cityIds: []
    },
    total: 0,
    showPushContent: true,
    showPushJumpTarget: true,
    showLink: true
}

export default new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    }
)
