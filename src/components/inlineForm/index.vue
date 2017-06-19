<template>
    <div class="wrap">
        <el-form :inline="true">
            <slot></slot>
            <el-form-item>
                <el-button type="primary" icon="edit">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped>
    .el-form {
        padding: 15px;
        background: #fff;
        border: solid 1px #eaeaea;
        border-radius: 5px;
        margin-top: 20px;
    }
</style>
<script>
    export default {
        name: 'inlineForm',
        props: {},
    }
</script>
