<template>
  <el-dialog title="创建文案包" :visible.sync="dialogFormVisible">
   <el-form>
        <slot></slot>
        <el-form-item>
            <el-button type="primary" @click="handleSubmit" icon="edit">提交</el-button>
        </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
  import nestRender from './nestRender'
  export default {
        name: 'dialogList',
        props: {
            dialogFormVisible: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            handleSubmit() {
                
            }
        },
        nest: true,
        nestRender
    }
</script>
<style>
</style>
