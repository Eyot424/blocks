import index from './index'
import gatherFormItemData from './gatherFormItemData/index.vue'
index.props['settingDefinition'] = {
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
                nestedData: this.formItemData.value,
                ref: this.ref
            }
        }
    },
    methods:{
        backFill: function (submitData) {
            this.formItemData.value = submitData.nestedData
            this.ref = submitData.ref
        }
    }
}
export default index
