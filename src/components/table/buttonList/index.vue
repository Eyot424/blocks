<template>
    <div class="wrap">
        <template v-for="(item,index) in selfValue">
            <el-row>
                <el-col :span="24">
                    <span class="el-input-group__prepend button-span">按钮类型</span>
                    <el-radio-group v-model="item.type">
                        <el-radio :label="1">查看</el-radio>
                        <el-radio :label="2">编辑</el-radio>
                        <el-radio :label="3">上线</el-radio>
                        <el-radio :label="4">下线</el-radio>
                        <el-radio :label="5">删除</el-radio>
                        <el-radio :label="6">日志</el-radio>
                    </el-radio-group>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-input placeholder="请输入内容"
                              v-model="item.url">
                        <template slot="prepend">链接</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="16">
                    <el-input placeholder="请输入内容"
                              v-model="item.condition">
                        <template slot="prepend">显示条件</template>
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
    .button-span{
        display: inline-block;
        width: auto;
        border-right: 1px solid #bfcbd9;
        border-radius: 4px;
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
                    type: '',
                    url: '',
                    condition: '',
                    icon: ''
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
