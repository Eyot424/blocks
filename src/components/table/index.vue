<template>
    <div class="tables">
         <el-form :inline="true" class="button-list">
            <el-form-item v-for="item in otherButtons" key="item.label">
                <template v-if="item.url">
                    <el-button :icon="item.icon" type="primary" @click="jumpUrl(item.url)">{{item.label}}</el-button>
                </template>
                <template v-else>
                    <el-button type="primary" @click="item.event">{{item.label}}</el-button>
                </template>
            </el-form-item>
        </el-form>
        <el-table border :data="tableData">
            <template v-for="item in tableList">
                <template v-if="!!item.url">
                    <el-table-column :label="item.label" key="url">
                        <template scope="scope">
                            <a :href="item.url">{{getScopeData(scope,item)}}</a>
                        </template>
                    </el-table-column>
                </template>
                <template v-else>
                    <el-table-column :label="item.label" key="noneUrl">
                        <template scope="scope">
                            {{getScopeData(scope,item)}}
                        </template>
                    </el-table-column>
                </template>
            </template>
            <el-table-column label="操作">
                <template scope="scope">
                    <template v-for="item in buttonList">
                        <template v-if="isShow(item, scope.row)">
                            <template v-if="item.type == 1 || item.type == 2 || item.type == 6">
                                <el-button type="primary" size="small" @click="handleOpen(scope.$index, scope.row, item)">{{getButtonText(item.type)}}</el-button>
                            </template>
                            <template v-else-if="item.type == 3 || item.type == 4 || item.type == 5">
                                <el-button type="primary" size="small" @click="handleEnsure(scope.$index, scope.row, item)">{{getButtonText(item.type)}}</el-button>
                            </template>
                        </template>
                    </template>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="提示"
            :visible.sync="dialogInfo.visible"
            
            size="tiny">
            <span>{{dialogInfo.text}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogInfo.visible = false">取 消</el-button>
                <el-button type="primary" @click="handleOperate(dialogInfo)">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'tables',
        props: {
            tableData: {
                type: Array,
                default(){
                    return []
                }
            },
            tableList: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            },
            buttonList: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            },
            otherButtons: {
                type: Array,
                default: [{
                    label: '默认',
                    event: '',
                    icons: '',
                    url: ''
                }]
            },
            dialogInfo: {
                type: Object,
                default(){ 
                    return {
                        text: '',
                        data: {},
                        visible: false,
                        url: ''
                    }
                }
            }
        },
        methods: {
            getScopeData: function(scope, item) {
                let data = scope.row;
                return eval(item.prop)
            },
            handleOpen(index, row, item) {
                let data = row;
                window.open(eval(item.url))
            },
            handleEnsure(index, row, item) {
                this.dialogInfo.visible = true;
                this.dialogInfo = {
                    text: '确定要' + this.getButtonText(item.type) + '活动' + row.activity_name + '吗？',
                    data: row,
                    url: item.url
                }
            },
            handleOperate(info) {
                this.dialogInfo.visible = false;
                let data = info.data;
                axios.get(eval(info.url))
                .then(response => {
                    if(response.errno == 0) {
                        this.$message.success(response.errmsg);
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000)
                    } else {
                        this.$message.error(response.errmsg);
                    }
                })
                .catch(error => {
                    this.$message.error('网络错误，请稍后重试');
                });
            },
            getButtonText(type){
                switch (type) {
                    case 1:
                        return '查看'
                        break;
                    case 2:
                        return '编辑'
                        break;
                    case 3:
                        return '上线'
                        break;
                    case 4:
                        return '下线'
                        break;
                    case 5:
                        return '删除'
                        break;
                    case 6:
                        return '日志'
                        break;
                    default:
                        return '查看'
                }
            },
            isShow(item, data) {
                if(item.condition == '') {
                    return true;
                } else {
                    return eval(eval(item.condition))
                }
            }
        }
    }
</script>

<style scoped>

    .el-table{
        margin-bottom: 20px;
    }
</style>
