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
        }
    },
    components: {
        radioList
    },
    computed: {
        submitData: function() {
            return {
                allRadioData: this.allRadioData.value,
                ref: this.ref
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allRadioData.value = submitData.allRadioData
            this.ref = submitData.ref
        }
    }
}
export default index
