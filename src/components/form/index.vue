<template>
    <div class="wrap">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <slot></slot>
            <el-row>
                <el-col :span="12" :offset="10">
                    <el-button type="primary" icon="edit" @click="submit">提交</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
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
<script>
    import nestRender from './nestRender'
    export default {
        name: 'forms',
        props: {
            ruleForm: {
                type: Object,
                default() {
                    return {}
                }
            },
            rules: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        mounted() {
            
        },
        methods: {
            submit() {
                this.$store.dispatch('submitForm')
            }
        },
        nest: true,
        nestRender,
        components: {}
    }
</script>
