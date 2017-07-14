import index from './index'
import radioList from './radioList/index.vue'
index.props['settingDefinition'] = {
    setting: {
        allRadioData: {
            type: 'radioList',
            label: '',
            require: true,
            componentData: {
                radioValue: '',
                value: [
                {
                    label: '默认',
                    value: ''
                }
                ]
            },
        },
        radioRef: {
            type: 'el-input',
            label: '绑定字段',
            require: true,
            componentData: {
                value:''
            },
        }
    },
    components: {
        radioList
    },
    computed: {
        submitData: function() {
            return {
                allRadioData: this.allRadioData.value,
                radioRef: this.radioRef.value
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allRadioData.value = submitData.allRadioData,
            this.radioRef.value = submitData.radioRef
        }
    }
}
export default index
