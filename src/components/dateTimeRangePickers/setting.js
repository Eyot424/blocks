import index from './index'
index.props['settingDefinition'] = {
    setting: {
        placeholderStart: {
            type: 'el-input',
            label: 'placeholder',
            require: true,
            componentData: {
                value:''
            },
        },
        placeholderEnd: {
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
                placeholderStart: this.placeholderStart.value,
                placeholderEnd: this.placeholderEnd.value,
                detail: this.detail.value,
                ref: this.ref
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.placeholderStart.value = submitData.placeholderStart
            this.placeholderEnd.value = submitData.placeholderEnd
            this.detail.value = submitData.detail
            this.ref = submitData.ref
        }
    }
}
export default index
