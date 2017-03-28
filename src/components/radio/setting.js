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
                value:[{
                    label: '默认',
                    value: ''
                }]
            },
        }
    },
    components:{
        radioList
    },
    computed: {
        submitData: function () {
            return {
                allRadioData: this.allRadioData.value,
                radioValue: this.allRadioData.radioValue
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.allRadioData.value = submitData.allRadioData,
            this.allRadioData.radioValue = submitData.radioValue
        }
    }
}
export default index