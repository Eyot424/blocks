<template>
    <div class="wrap">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-width="labelWidth">
            <slot></slot>
            <el-row v-if="pageState !== 'detail'">
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
    import pageStateMixin from '@/mixin/pageState'
    export default {
        name: 'forms',
        mixins:[pageStateMixin],
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
            },
            labelWidth: {
                type: String,
                default() {
                    return '100px'
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
