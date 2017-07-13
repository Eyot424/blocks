<template>
    <div class="checkBox">
        <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="item in allCheckData" :key="item.label" :label="item.value">{{item.label}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'checkBox',
        props: {
            allCheckData: {
                type: Array,
                default() {
                        return [
                        // {
                        //     value: 'test',
                        //     label: '默认',
                        //     checked: false
                        // }
                    ]
                }
            },
            checkList: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .checkBox{
        margin-bottom: 20px;
    }
</style>
