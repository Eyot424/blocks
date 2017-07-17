<template>
    <div class="wrap">
        <template v-for="(item,index) in selfValue">
            <el-row>
                <el-col :span="8">
                    <el-input placeholder="请输入内容"
                              v-model="item.label">
                        <template slot="prepend">文案</template>
                    </el-input>
                </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入内容"
                              v-model="item.url">
                        <template slot="prepend">跳转url</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input placeholder="请输入内容"
                              v-model="item.icon">
                        <template slot="prepend">图标</template>
                    </el-input>
                </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入内容"
                              v-model="item.clickEvent">
                        <template slot="prepend">绑定事件</template>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <template v-if="index === 0">
                        <el-button type="primary"
                                   @click="addColumn">增加一列
                        </el-button>
                    </template>
                    <template v-else>
                        <el-button type="primary"
                                   @click="selfValue.splice(index,1)">删除该列
                        </el-button>
                    </template>
                </el-col>
            </el-row>
        </template>
    </div>
</template>
<style scoped>
    .el-row{
           height: 42px;
    }
</style>
<script>
    export default{
        props: {
            value: {}
        },
        data(){
            return {}
        },
        computed: {
            selfValue: function () {
                return this.value;
            }
        },
        methods: {
            addColumn: function () {
                this.selfValue.push({
                    label: '',
                    clickEvent: '',
                    icons: '',
                    url: ''
                })
            }
        },
        watch: {
            selfValue: {
                deep: true,
                handler: function (value) {
                    this.$emit('input', value)
                }
            }
        },
        components: {}
    }
</script>
