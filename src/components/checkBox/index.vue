<template>
    <div class="checkBox">
        <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="item in allCheckData" :label="item.value">{{item.label}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'checkBox',
        props: {
            allCheckData: {
                type: Array,
                default: [{
                    value: 'test',
                    label: '默认',
                    checked: false
                }]
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
