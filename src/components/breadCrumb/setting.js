import index from './index'
import breadCrumbList from './breadCrumbList/index.vue'
index.props['settingDefinition'] = {
    setting: {
        allData: {
            type: 'breadCrumbList',
            label: '',
            require: true,
            componentData: {
                value: [{
                    label: '默认'
                }]
            },
        }
    },
    components: {
        breadCrumbList
    },
    computed: {
        submitData: function() {
            return {
                allData: this.allData.value,
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allData.value = submitData.allData
        }
    }
}
export default index
