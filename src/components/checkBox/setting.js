import index from './index'
import checkBoxList from './checkBoxList/index.vue'
index.props['settingDefinition'] = {
    setting: {
        allCheckData: {
            type: 'checkBoxList',
            label: '',
            require: true,
            componentData: {
                value:[{
                    label: '默认',
                    checked: false,
                    value: ''
                }]
            },
        }
    },
    components:{
        checkBoxList
    },
    computed: {
        submitData: function () {
            let getCheckData = this.allCheckData.value;
            let getCheckList = [];
            for (let i = 0; i < getCheckData.length; i ++) {
                if (getCheckData[i].checked == true) {
                    getCheckList.push(getCheckData[i].value);
                };
            };
            return {
                allCheckData: getCheckData,
                checkList: getCheckList
            }
        }
    },
    methods:{
        backFill:function (submitData) {
            this.allCheckData.value = submitData.allCheckData,
            this.checkList.value = submitData.checkList
        }
    }
}
export default index