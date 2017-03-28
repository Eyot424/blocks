import index from './index'
index.props['settingDefinition'] = {
    setting: {
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
                inputIcon: this.inputIcon.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.inputIcon.value = submitData.inputIcon
        }
    }
}
export default index
