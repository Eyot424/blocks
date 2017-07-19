import index from './index'
import radioList from './radioList/index.vue'
import ensureRef from '../ensureRef/index.vue'
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
            type: 'ensureRef',
            label: '绑定字段',
            require: true,
            componentData: {
                value:''
            },
        }
    },
    components: {
        radioList,
        ensureRef
    },
    computed: {
        submitData: function() {
            let getRadioData = this.allRadioData.value;
            let radioValue = '';
            for (let i = 0; i < getRadioData.length; i++) {
                if (getRadioData[i].checked == true) {
                   radioValue = getRadioData[i].value;
                };
            };
            return {
                allRadioData: this.allRadioData.value,
                radioRef: this.radioRef.value,
                radioValue: radioValue
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allRadioData.value = submitData.allRadioData,
            this.radioRef.value = submitData.radioRef
            this.radioValue = submitData.radioValue
        }
    }
}
export default index
