<template>
    <div class="wrap">
        <el-input placeholder="请输入v-model绑定的字段"
                  v-model="radioValue.value">
            <template slot="prepend">绑定数据</template>
        </el-input>
        <template v-for="(item,index) in selfValue">
            <el-row>
                <el-col :span="10">
                    <el-input placeholder="请输入内容"
                              v-model="item.label">
                        <template slot="prepend">文案</template>
                    </el-input>
                </el-col>
                <el-col :span="10">
                    <el-input placeholder="请输入内容"
                              v-model="item.value">
                        <template slot="prepend">值</template>
                    </el-input>
                </el-col>
                <el-col :span="2">
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

<style lang="less"
       rel="stylesheet/less"
       scoped>
    .wrap {
    }
</style>

<script>
    export default{
        props: {
            value: {},
            radioValue: ''
        },
        data(){
            return {}
        },
        computed: {
            selfValue: function () {
                console.log(this.value)
                return this.value;
            }
        },
        methods: {
            addColumn: function () {
                this.selfValue.push({
                    label: ''
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
