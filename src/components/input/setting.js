import index from './index'
index.props['settingDefinition'] = {
    setting: {
        inputIcon: {
            type: 'el-input',
            label: 'icon信息',
            require: true,
            componentData: {
                value:''
            }
        },
        placeholder: {
            type: 'el-input',
            label: 'placeholder',
            require: true,
            componentData: {
                value:''
            }
        }
    },
    computed: {
        submitData: function () {
            return {
                inputIcon: this.inputIcon.value,
                placeholder: this.placeholder.value,
                ref:this.ref
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.inputIcon.value = submitData.inputIcon
            this.placeholder.value = submitData.placeholder
            this.ref = submitData.ref
        }
    }
}
export default index
