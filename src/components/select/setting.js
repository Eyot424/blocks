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
        },
        detail: {
            type: 'el-input',
            label: '文案',
            require: true,
            componentData: {
                value: ''
            }
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
                checkList: getList,
                detail: this.detail.value,
                ref: this.ref
            }
        }
    },
    methods: {
        backFill: function(submitData) {
            this.allData.value = submitData.allData
            this.checkList.value = submitData.checkList
            this.detail.value = submitData.detail
            this.ref = submitData.ref
        }
    }
}
export default index
