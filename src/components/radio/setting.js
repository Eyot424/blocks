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
                value: [{
                    label: '默认',
                    value: ''
                }]
            },
        }
    },
    components: {
        radioList
    },
    computed: {
        submitData: function() {
            return {
                allRadioData: this.allRadioData.value
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allRadioData.value = submitData.allRadioData
        }
    }
}
export default index
