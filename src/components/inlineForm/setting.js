import index from './index'
import gatherFormItemData from './gatherFormItemData/index.vue'
index.props['settingDefinition'] = {
    nest: {
        render:function (h,component,item) {

            var label = item ? item.label : '默认'

            return (
                <el-form-item label={label}>
                    {component}
                </el-form-item>
            )
        }
    },
    setting: {
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
        gatherFormItemData
    },
    computed: {
        submitData: function () {
            return {
                nestedData: this.formItemData.value
            }
        }
    },
    methods:{
        backFill: function (submitData) {
            this.formItemData.value = submitData.nestedData
        }
    }
}
export default index
