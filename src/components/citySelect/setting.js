import index from './index'
index.props['settingDefinition'] = {
    setting: {
        cityModel: {
            type: 'el-input',
            label: 'v-model绑定变量',
            require: true,
            componentData: {
                value: '',
                template: '%i'
            },
        }
    },
    computed: {
        submitData: function() {
            return {
                cityModel: this.cityModel.value
            }
        }
    },
    methods:{
        backFill: function(submitData) {
            this.cityModel.value = submitData.cityModel
        }
    }
}
export default index
