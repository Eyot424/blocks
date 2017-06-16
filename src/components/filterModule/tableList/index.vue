<template>
    <div class="wrap">
        <template v-for="(item,index) in selfValue">
            <el-row>
                <el-col :span="12">
                    <el-input placeholder="请输入内容"
                              v-model="item.label">
                        <template slot="prepend">列标题</template>
                    </el-input>
                </el-col>
                <el-col :span="12">
                    <el-input placeholder="请输入内容"
                              v-model="item.prop">
                        <template slot="prepend">列属性</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="16">
                    <el-input placeholder="请输入内容"
                              v-model="item.url">
                        <template slot="prepend">列链接</template>
                    </el-input>
                </el-col>
                <el-col :span="8">
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
                    prop: '',
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
