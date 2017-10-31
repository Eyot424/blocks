<template>
    <div class="upload">
        <el-upload
            class="upload-demo"
            :action="url"
            :name="name"
            :multiple="multiple"
            :list-type="listType"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            :on-error="handleError"
            :data="uploadParam"
            :accept = "accept"
            :show-file-list = "showFileList">
            <el-button type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">{{detail}}</div>
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
            detail: {
                type: String,
                default: ''
            },
            uploadParam: {
                type: Object,
                default: {}
            },
            accept: {
                type: String,
                default: ''
            },
            showFileList: {
                type: Boolean,
                default: true
            },
            beforeUploadFunc: {
                type: Function
            },
            successFunc: {
                type: Function
            },
            errorFunc: {
                type: Function
            },
            uploadBeforeFlag: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {

            }
        },
        methods: {
            beforeUpload(file) {
                if (this.beforeUploadFunc) {
                    return this.beforeUploadFunc(file);
                }
            },
            handleSuccess(res) {
                if(this.successFunc) {
                    this.successFunc(res);
                }
            },
            handleError(error) {
                if(this.errorFunc) {
                    this.errorFunc(error);
                }
            }
        }
    }
</script>

<style scoped>
    .upload-demo {

    }

</style>
