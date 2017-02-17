import index from './index'
index.props['settingDefinition'] = {
    setting: {
        buttonText: {
            type: 'el-input',
            label: '按钮文案',
            require: true,
            componentData: {
                value:'',
                template: '%i'
            },
        },
        buttonType: {
            type: 'el-input',
            label: '按钮类型',
            require: true,
            componentData: {
                value:'',
                template: '%i'
            },
        },
        buttonIcon: {
            type: 'el-input',
            label: '按钮icon',
            require: true,
            componentData: {
                value:'',
                template: '%i'
            },
        }
    },
    computed: {
        submitData: function () {
            return {
                buttonText: this.buttonText.value,
                buttonType: this.buttonType.value,
                buttonIcon: this.buttonIcon.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.buttonText.value = submitData.buttonText,
            this.buttonType.value = submitData.buttonType,
            this.buttonIcon.value = submitData.buttonIcon
        }
    }
}
export default index
