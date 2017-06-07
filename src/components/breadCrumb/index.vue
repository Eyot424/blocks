<template>
    <div class="breadCrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in allData" :key="item.label">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'breadCrumb',
        props: {
            allData: {
                type: Array,
                default: [{
                    label: '默认'
                }]
            }
        }
    }
</script>

<style lang="less"
       rel="stylesheet/less"
       scoped>
    .breadCrumb{
        .el-breadcrumb {
            font-size: 14px;
            line-height: 1.5;
        }

        margin: 20px 0;
    }
</style>
