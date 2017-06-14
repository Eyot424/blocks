import index from './index'
import tableList from './tableList/index.vue'
import formList from './formList/index.vue'
import buttonList from './buttonList/index.vue'
index.props['settingDefinition'] = {
    setting: {
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
                    url: '跳转链接'
                }]
            },
        },
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
        buttonListData: {
            type: 'buttonList',
            label: 'button信息显示',
            require: true,
            componentData: {
                value:[{
                    prop: '',
                    label: '默认'
                }]
            },
        }
    },
    components:{
        tableList,
        formList,
        buttonList
    },
    computed: {
        submitData: function () {
            return {
                tableList: this.tableListData.value,
                buttonList: this.buttonListData.value,
                nestedData: this.formItemData.value,
                url: this.urlData.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.tableListData.value = submitData.tableList,
            this.buttonListData.value = submitData.buttonList,
            this.formItemData.value = submitData.nestedData,
            this.urlData.value = submitData.url
        }
    }
}
export default index
