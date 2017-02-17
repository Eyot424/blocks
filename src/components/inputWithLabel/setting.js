import index from './index'
index.props['settingDefinition'] = {
    setting: {
        labelText: {
            type: 'el-input',
            label: 'label信息',
            require: true,
            componentData: {
                value:'',
                template: '%i',
                inputValue: []
            },
        },
        inputIcon: {
            type: 'el-input',
            label: 'icon信息',
            require: true,
            componentData: {
                value:'',
                template: '%i',
                inputValue: []
            },
        }
    },
    computed: {
        submitData: function () {
            return {
                labelText: this.labelText.value,
                inputIcon: this.inputIcon.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.labelText.value = submitData.labelText,
            this.inputIcon.value = submitData.inputIcon
        }
    }
}
export default index
