<template>
    <div class="selects">
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in allData"
                :key="item.label"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <span>{{detail}}</span>
    </div>
</template>

<script>
    export default {
        name: 'selects',
        props: {
            allData: {
                type: Array,
                default() { 
                    return [{
                        label: '请选择',
                        value: ''
                    }]
                }
            },
            selectList: {
                type: Array,
                default() {
                    return []
                }
            },
            detail: {
                type: String,
                default() {
                    return ''
                }
            },
            getAllData: {
                type: Function
            }
        },
        mounted() {
            if(this.getAllData) {
                this.getAllData();
            }
        }
    }
</script>

<style scoped>
    .selects{
        margin-bottom: 20px;
    }
</style>
