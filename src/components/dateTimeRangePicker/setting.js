import index from './index'
index.props['settingDefinition'] = {
    setting: {
        datetimeRangeFormat: {
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
                // datetimeRangeFormat: this.datetimeRangeFormat.value,
                placeholder: this.placeholder.value,
                detail: this.detail.value,
                ref: this.ref
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            // this.datetimeRangeFormat.value = submitData.datetimeRangeFormat,
            this.placeholder.value = submitData.placeholder
            this.detail.value = submitData.detail
            this.ref = submitData.ref
        }
    }
}
export default index
