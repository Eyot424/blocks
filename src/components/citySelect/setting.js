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
            },
        },
        inputRef: {
            type: 'ensureRef',
            label: '绑定字段',
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
        submitData: function() {
            return {
                inputIcon: this.inputIcon.value,
                inputRef: this.inputRef.value
            }
        }
    },
    methods:{
        backFill: function(submitData) {
            this.inputIcon.value = submitData.inputIcon,
            this.inputRef.value = submitData.inputRef
        }
    }
}
export default index
