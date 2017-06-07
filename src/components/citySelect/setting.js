import index from './index'
index.props['settingDefinition'] = {
    setting: {
        text: {
            type: 'el-input',
            label: '',
            require: true,
            componentData: {
                value: ''
            },
        }
    },
    computed: {
        submitData: function() {
            return {
                text: this.text.value
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.text.value = submitData.text
        }
    }
}
export default index
