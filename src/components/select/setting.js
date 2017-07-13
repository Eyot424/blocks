import index from './index'
import selectList from './selectList/index.vue'
index.props['settingDefinition'] = {
    setting: {
        allData: {
            type: 'selectList',
            label: '',
            require: true,
            componentData: {
                value: [{
                    label: '默认'
                }]
            },
        },
        selectRef: {
            type: 'el-input',
            label: '绑定字段',
            require: true,
            componentData: {
                value:''
            },
        }
    },
    components: {
        selectList
    },
    computed: {
        submitData: function () {
            return {
                allData: this.allData.value,
                selectRef: this.selectRef.value
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allData.value = submitData.allData,
            this.selectRef.value = submitData.selectRef
        }
    }
}
export default index
