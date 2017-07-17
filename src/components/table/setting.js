import index from './index'
import tableList from './tableList/index.vue'
import buttonList from './buttonList/index.vue'
import otherButtons from './otherButtons/index.vue'
index.props['settingDefinition'] = {
    setting: {
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
        buttonList,
        otherButtons
    },
    computed: {
        submitData: function () {
            return {
                tableList: this.tableListData.value,
                buttonList: this.buttonListData.value,
                otherButtons: this.otherButtonsData.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.tableListData.value = submitData.tableList,
            this.buttonListData.value = submitData.buttonList,
            this.otherButtonsData.value = submitData.otherButtons
        }
    }
}
export default index
