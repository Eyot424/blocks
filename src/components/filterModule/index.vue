<template>
    <div class="filter">
        <el-form :inline="true">
            <slot></slot>
            <el-form-item>
                <el-button type="primary" icon="edit">提交</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="columnData">
            <el-table-column v-for="item in columnData" :key="item.label" :prop="item.prop" :label="item.label">
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'filterModule',
        props: {
            columnData: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            }
        }
    }
</script>

<style lang="less"
       rel="stylesheet/less"
       scoped>

    .el-form {
        padding: 15px;
        background: #fff;
        border: solid 1px #eaeaea;
        border-radius: 5px;
        margin-top: 20px;
    }
</style>
