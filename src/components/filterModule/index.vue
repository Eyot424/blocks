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
        <el-table border>
            <el-table-column v-for="item in tableList" :key="item.label" :prop="item.prop" :label="item.label">
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <!-- <el-button v-for="item in buttonList" :key="item.label" :prop="item.prop" :label="item.label">
                    </el-button> -->
                    <el-button type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
    import axios from 'axios'
    import nestRender from './nestRender'
    export default {
        name: 'filterModule',
        props: {
            tableList: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            },
            url: {
                type: Array,
                default: {
                    value: '',
                }
            },
            buttonList: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            }
        },
        data(){
            return {}
        },
        methods: {
            handleClick: function(scope) {
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
