<template>
    <div class="breadCrumb">
        <el-input v-model="value" :icon="inputIcon" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
    export default {
        name: 'breadCrumb',
        props: {
            inputIcon: {
                type: String,
                default: 'search'
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: auto;
    }
</style>
