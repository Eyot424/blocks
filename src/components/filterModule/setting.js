import index from './index'
import tableList from './tableList/index.vue'
import formList from './formList/index.vue'
import buttonList from './buttonList/index.vue'
import otherButtons from './otherButtons/index.vue'
index.props['settingDefinition'] = {
    setting: {
        formItemData: {
            type: 'formList',
            label: 'form信息显示',
            require: true,
            componentData: {
                value:[{
                    prop: '',
                    label: '默认'
                }]
            },
        },
        urlData: {
            type: 'el-input',
            label: '请求地址',
            require: true,
            componentData: {
                value: ''
            },
        },
        tableListData: {
            type: 'tableList',
            label: 'table信息显示',
            require: true,
            componentData: {
                value:[{
                    prop: '',
                    label: '默认',
                    url: ''
                }]
            },
        },
        buttonListData: {
            type: 'buttonList',
            label: 'table按钮信息显示',
            require: true,
            componentData: {
                value:[{
                    type: '1',
                    url: '',
                    condition: ''
                }]
            },
        },
        otherButtonsData: {
            type: 'otherButtons',
            label: '按钮组信息显示',
            require: true,
            componentData: {
                value:[{
                    label: '默认',
                    prop: ''
                }]
            },
        }
    },
    components:{
        tableList,
        formList,
        buttonList,
        otherButtons
    },
    computed: {
        submitData: function () {
            return {
                tableList: this.tableListData.value,
                buttonList: this.buttonListData.value,
                nestedData: this.formItemData.value,
                url: this.urlData.value,
                otherButtons: this.otherButtonsData.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.tableListData.value = submitData.tableList,
            this.buttonListData.value = submitData.buttonList,
            this.formItemData.value = submitData.nestedData,
            this.urlData.value = submitData.url,
            this.otherButtonsData.value = submitData.otherButtons
        }
    }
}
export default index
