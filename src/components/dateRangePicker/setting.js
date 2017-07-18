import index from './index'
index.props['settingDefinition'] = {
    setting: {
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
        },
        dateRangeRef: {
            type: 'el-input',
            label: '绑定字段',
            require: true,
            componentData: {
                value:''
            }
        }
    },
    computed: {
        submitData: function () {
            return {
                // dateRangeFormat: this.dateRangeFormat.value,
                placeholder: this.placeholder.value,
                detail: this.detail.value,
                dateRangeRef: this.dateRangeRef.value,
                ref: this.ref
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            // this.dateRangeFormat.value = submitData.dateRangeFormat
            this.placeholder.value = submitData.placeholder
            this.detail.value = submitData.detail
            this.dateRangeRef.value = submitData.dateRangeRef
            this.ref = submitData.ref
        }
    }
}
export default index
