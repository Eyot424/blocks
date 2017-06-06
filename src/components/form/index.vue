<template>
    <div class="wrap">
        <el-form>
            <slot></slot>
            <el-row>
                <el-col :span="12" :offset="10">
                    <el-button>提交</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<style lang="less"
       rel="stylesheet/less"
       scoped>
    .wrap {
        border: 1px solid silver;
        min-height: 200px;
        /*padding-top: 100px;*/
    }
</style>
<script>
    import nestRender from './nestRender'
    export default {
        props: {},
        name: 'forms',
        data(){
            return {}
        },
        nest:true,
        nestRender,
        components: {}
    }
</script>
