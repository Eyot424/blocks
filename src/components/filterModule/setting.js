import index from './index'
import gatherColumnData from './gatherColumnData/index.vue'
import gatherFormItemData from './gatherFormItemData/index.vue'
index.props['settingDefinition'] = {
    setting: {
        columnData: {
            type: 'gatherColumnData',
            label: '表格显示',
            require: true,
            componentData: {
                value:[{
                    prop:'',
                    label:'默认'
                }]
            },
        },
        formItemData: {
            type: 'gatherFormItemData',
            label: '显示信息',
            require: true,
            componentData: {
                value:[{
                    prop:'',
                    label:'默认'
                }]
            },
        }
    },
    components:{
        gatherColumnData,
        gatherFormItemData
    },
    computed: {
        submitData: function () {
            return {
                columnData: this.columnData.value,
                nestedData: this.formItemData.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.columnData.value = submitData.columnData,
            this.formItemData.value = submitData.nestedData
        }
    }
}
export default index
