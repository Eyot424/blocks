<template>
    <div class="upload">
        <el-upload
            class="upload-demo"
            :action="url"
            :name="name"
            :multiple="multiple"
            :list-type="listType">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">{{tip}}</div>
        </el-upload>
    </div>
</template>

<script>
    export default {
        name: 'upload',
        props: {
            url: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            multiple: {
                type: Boolean,
                default: ''
            },
            listType: {
                type: String,
                default: ''
            },
            // fileList: {
            //     type: Object,
            //     default: {}
            // }
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>
