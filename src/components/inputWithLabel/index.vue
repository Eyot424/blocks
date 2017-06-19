<template>
    <div class="inputWithLabel">
        <label class="el-form-item__label">{{labelText}}</label>
        <el-input v-model="value" :icon="inputIcon" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
    export default {
        name: 'inputWithLabel',
        props: {
            labelText: {
                type: String,
                default: '请输入内容'
            },
            inputIcon: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: auto;
    }

    .inputWithLabel{
        margin-bottom: 20px;
    }
</style>
