import index from './index'
index.props['settingDefinition'] = {
    setting: {
        msg: {
            type: 'el-input',
            label: '显示信息',
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
                msg: this.msg.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.msg.value = submitData.msg
        }
    }
}
export default index
