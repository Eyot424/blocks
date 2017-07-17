<template>
    <div class="wrap">
        <el-form>
            <slot></slot>
            <el-row>
                <el-col :span="12" :offset="10">
                    <el-button type="primary" icon="edit">提交</el-button>
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
    // import store from './store.js'
    export default {
        name: 'forms',
        props: {
            getAllCheckData: {
                type: Function
            },
            getAllData: {
                type: Function
            }
        },
        data() {
            return {}
        },
        // store,
        mounted() {
            if(this.getAllCheckData) {
                this.getAllCheckData();
            }
            if(this.getAllData) {
                this.getAllData();
            }
        },
        nest: true,
        nestRender,
        components: {}
    }
</script>
