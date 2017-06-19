<template>
    <div class="filterModule">
        <el-form :inline="true">
            <slot></slot>
            <el-form-item>
                <el-button type="primary" icon="edit">提交</el-button>
            </el-form-item>
        </el-form>
        <el-form :inline="true">
            <slot></slot>
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
        <el-pagination
            @current-change="changePage"
            :current-page="curPage"
            :page-size="perPage"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
        <el-dialog
            title="提示"
            :visible.sync="dialogInfo.visible"
            show-close="false"
            size="tiny">
            <span>{{dialogInfo.text}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogInfo.visible = false">取 消</el-button>
                <el-button type="primary" @click="handleOperate(dialogInfo.url, dialogInfo.id)">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios'
    import tableData from './data.js'
    import nestRender from './nestRender'
    export default {
        name: 'filterModule',
        props: {
            tableData: {
                type: Array,
                default: []
            },
            tableList: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            },
            url: {
                type: String,
                default: ''
            },
            buttonList: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            },
            total: {
                type: Number,
                default: 20
            },
            curPage: {
                type: Number,
                default: 1
            },
            perPage: {
                type: Number,
                default: 20
            },
            dialogInfo: {
                type: Object,
                default: {
                    text: '',
                    id: '',
                    visible: false,
                    url: ''
                }
            }
        },
        data(){
            return {}
        },
        methods: {
            changePage: function(val) {
                axios.get(this.url + '&curpage=' + val + '&perpage=' + this.perPage)
                .then(response => {
                    this.tableData = response.data.item;
                    this.curPage = response.data.curpage;
                    this.perPage = response.data.perpage;
                    this.total = response.data.total;
                })
                .catch(error => {
                    this.tableData = tableData.data.item;
                    this.curPage = tableData.data.curpage;
                    this.perPage = tableData.data.perpage;
                    this.total = tableData.data.total;
                });
            },
            getScopeData: function(scope, item) {
                let propsArray = item.prop.split('&&');
                let dataString = '';
                for(let i in propsArray){
                    dataString += scope.row[propsArray[i]] ? scope.row[propsArray[i]] : propsArray[i];
                }
                return dataString;
            },
            handleOpen(index, row, item) {
                window.open(item.url + row.activity_id)
            },
            handleEnsure(index, row, item) {
                this.dialogInfo.visible = true;
                this.dialogInfo = {
                    text: '确定要' + this.getButtonText(item.type) + '活动' + row.activity_name + '吗？',
                    id: row.activity_id,
                    url: item.url
                }
            },
            handleOperate(url, id) {
                this.dialogInfo.visible = false;
                axios.get(url + id)
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
                if(data.status) {
                    return eval(item.condition.replace(/status/g,'data.status'))
                } else {
                    return eval(item.condition.replace(/status/g,'data.activity_status'))
                }
            }
        },
        watch: {
            url: function(val) {
                axios.get(this.url)
                .then(response => {
                    this.tableData = response.data.item;
                    this.curPage = response.data.curpage;
                    this.perPage = response.data.perpage;
                    this.total = response.data.total;
                })
                .catch(error => {
                    this.tableData = tableData.data.item;
                    this.curPage = tableData.data.curpage;
                    this.perPage = tableData.data.perpage;
                    this.total = tableData.data.total;
                });
            }
        },
        nest: true,
        nestRender,
        components: {}
    }
</script>

<style scoped>

    .el-form {
        padding: 15px;
        background: #fff;
        border: solid 1px #eaeaea;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    .el-table{
        margin-bottom: 20px;
    }
</style>
