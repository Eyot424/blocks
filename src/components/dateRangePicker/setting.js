import index from './index'
index.props['settingDefinition'] = {
    setting: {
        // dateRangeFormat: {
        //     type: 'el-input',
        //     label: '格式化',
        //     require: true,
        //     componentData: {
        //         value:'',
        //         template: '%i',
        //         placeholder: '年yyyy，月MM，日dd，以-分隔,年yyyy，月MM，日dd，以-分隔'
        //     },
        // },
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
                // dateRangeFormat: this.dateRangeFormat.value,
                placeholder: this.placeholder.value,
                detail: this.detail.value,
                ref: this.ref
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            // this.dateRangeFormat.value = submitData.dateRangeFormat
            this.placeholder.value = submitData.placeholder
            this.detail.value = submitData.detail
            this.ref = submitData.ref
        }
    }
}
export default index
