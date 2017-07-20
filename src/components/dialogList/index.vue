<template>
    <el-dialog title="创建文案包"
               :visible="dialogFormVisible"
               @update:visible="changeDialogFormVisible"
               >
        <el-form>
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
            }
        },
        data() {
            return {}
        },
        computed:{
            dialogFormVisible:function () {
                debugger
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
