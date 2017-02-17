import index from './index'
index.props['settingDefinition'] = {
    setting: {
        datetimeFormat: {
            type: 'el-input',
            label: '格式化',
            require: true,
            componentData: {
                value:'',
                template: '%i',
                placeholder: '年yyyy，月MM，日dd，小时HH，分mm，秒ss，以-分隔'
            },
        }
    },
    computed: {
        submitData: function () {
            return {
                datetimeFormat: this.datetimeFormat.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.datetimeFormat.value = submitData.datetimeFormat
        }
    }
}
export default index
