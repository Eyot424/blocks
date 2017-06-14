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
                    <el-table-column :label="item.label">
                        <template scope="scope">
                            <a :href="item.url">{{getScopeData(scope,item)}}</a>
                        </template>
                    </el-table-column>
                </template>
                <template v-else>
                    <el-table-column :prop="item.prop" :label="item.label">
                    </el-table-column>
                </template>
            </template>
            <el-table-column label="操作">
                <template scope="scope">
                    <!-- <el-button v-for="item in buttonList" :key="item.label" :prop="item.prop" :label="item.label">
                    </el-button> -->
                    <el-button type="text" size="small">查看</el-button>
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
                return scope.row[item.prop];
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
