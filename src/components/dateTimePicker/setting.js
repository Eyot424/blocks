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
        },
        placeholder: {
            type: 'el-input',
            label: 'placeholder',
            require: true,
            componentData: {
                value:''
            },
        },
        detail: {
            type: 'el-input',
            label: '详情信息',
            require: true,
            componentData: {
                value:''
            },
        }
    },
    computed: {
        submitData: function () {
            return {
                datetimeFormat: this.datetimeFormat.value,
                placeholder: this.placeholder.value,
                detail: this.detail.value,
                ref: this.ref
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.datetimeFormat.value = submitData.datetimeFormat
            this.placeholder.value = submitData.placeholder
            this.detail.value = submitData.detail
            this.ref = submitData.ref
        }
    }
}
export default index
