import index from './index'
import gatherColumnData from '@/components/gatherColumnData/index.vue'
index.props['settingDefinition'] = {
    setting: {
        columnData: {
            type: 'gatherColumnData',
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
        gatherColumnData
    },
    computed: {
        submitData: function () {
            return {
                columnData: this.columnData.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.columnData.value = submitData.columnData
        }
    }
}
export default index
