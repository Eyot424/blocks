<template>
    <div class="breadCrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item in allData">{{item.label}}</el-breadcrumb-item>
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
            },
            breadCrumbList: {
                type: Array,
                default: []
            }
        }
    }
</script>
