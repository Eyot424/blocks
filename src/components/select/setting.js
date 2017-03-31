import index from './index'
import selectList from './selectList/index.vue'
index.props['settingDefinition'] = {
    setting: {
        allData: {
            type: 'selectList',
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
        selectList
    },
    computed: {
        submitData: function() {
            let getData = this.allData.value;
            let getList = [];
            return {
                allData: getData,
                checkList: getList
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allData.value = submitData.allData,
                this.checkList.value = submitData.checkList
        }
    }
}
export default index
