<template>
    <div class="wrap">
        <el-row>
            <el-col :span="12">
                <el-input placeholder="请输入内容"
                          :value="refValue"
                          @input="updateValue">
                    <template slot="prepend">绑定字段</template>
                </el-input>
            </el-col>
            <el-col :span="6">
                <el-button type="primary"
                           @click="ensure">确认绑定
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                refValue: ''
            }
        },
        computed: {
            selfValue: function () {
                return this.value
            }
        },
        methods: {
            ensure: function () {
                this.value = this.refValue
            },
            updateValue: function(value) {
                this.refValue = value
            }
        },
        watch: {
            selfValue: {
                deep: true,
                handler: function (value) {
                    this.refValue = value
                    this.$emit('input', value)
                }
            }
        },
        components: {}
    }
</script>
