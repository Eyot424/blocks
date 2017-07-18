import index from './index'
import ensureRef from '../ensureRef/index.vue'
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
        },
        inputRef: {
            type: 'ensureRef',
            label: '绑定字段',
            require: true,
            componentData: {
                value:''
            },
        },
        mutationName: {
            type: 'el-input',
            label: '绑定事件名',
            require: true,
            componentData: {
                value:''
            },
        },
        stateName: {
            type: 'el-input',
            label: '默认回填数据',
            require: true,
            componentData: {
                value:''
            },
        }
    },
    components: {
        ensureRef
    },
    computed: {
        submitData: function () {
            return {
                inputIcon: this.inputIcon.value,
                placeholder: this.placeholder.value,
                inputRef: this.inputRef.value,
                mutationName: this.mutationName.value,
                stateName: this.stateName.value
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.inputIcon.value = submitData.inputIcon
            this.placeholder.value = submitData.placeholder
            this.inputRef.value = submitData.inputRef
            this.mutationName.value = submitData.mutationName,
            this.stateName.value = submitData.stateName
        }
    }
}
export default index
