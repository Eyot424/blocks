<template>
    <el-dialog title="创建文案包"
               :visible="dialogFormVisible"
               @update:visible="changeDialogFormVisible"
               :before-close="closeDialog">
        <el-form :label-width="labelWidth">
            <slot></slot>
            <el-form-item>
                <el-button type="primary"
                           @click="handleSubmit"
                           icon="edit">提交
                </el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
    import nestRender from './nestRender'
    export default {
        name: 'dialogList',
        props: {
            changeDialogFormVisible:{
                type:Function
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
        computed:{
            dialogFormVisible:function () {
                
            }
        },
        methods: {
            handleSubmit() {
                this.$store.dispatch('submitDialogForm')
            },
            closeDialog() {
                this.$store.commit('closePackageDialog')
            },
        },
        nest: true,
        nestRender
    }
</script>
<style></style>
