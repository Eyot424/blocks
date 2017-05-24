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
    </div>
</template>

<script>
    export default {
        name: 'selects',
        props: {
            allData: {
                type: Array,
                default: [{
                    label: '默认',
                    value: '1'
                }]
            },
            selectList: {
                type: Array,
                default: []
            }
        }
    }
</script>
