import index from './index'
index.props['settingDefinition'] = {
    setting: {
        url: {
            type: 'el-input',
            label: '上传地址',
            require: true,
            componentData: {
                value: '',
                template: '%i'
            },
        },
        name: {
            type: 'el-input',
            label: '上传文件字段名',
            require: true,
            componentData: {
                value: '',
                template: '%i'
            },
        },
        multiple: {
            type: 'el-checkbox',
            label: '是否选中',
            require: true,
            componentData: {
                value: false
            },
        },
        listType: {
            type: 'el-input',
            label: '文件列表类型',
            require: true,
            componentData: {
                value: '',
                template: '%i'
            },
        },
        detail: {
            type: 'el-input',
            label: '补充信息',
            require: true,
            componentData: {
                value:''
            },
        },
        accept: {
            type: 'el-input',
            label: '文件类型',
            require: true,
            componentData: {
                value:''
            },
        }
    },
    computed: {
        submitData: function() {
            return {
                url: this.url.value,
                name: this.name.value,
                multiple: this.multiple.value,
                listType: this.listType.value,
                detail: this.detail.value,
                accept: this.accept.value
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.url.value = submitData.url;
            this.name.value = submitData.name;
            this.multiple.value = submitData.multiple;
            this.listType.value = submitData.listType;
            this.detail.value = submitData.detail;
            this.accept.value = submitData.accept;
        }
    }
}
export default index
