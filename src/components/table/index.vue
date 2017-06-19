<template>
    <div class="table">
        <el-table :data="columnData">
            <el-table-column v-for="item in columnData" :key="item.label" :prop="item.prop" :label="item.label">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'tables',
        props: {
            columnData: {
                type: Array,
                default: [{
                    label: '默认',
                    prop: ''
                }]
            }
        }
    }
</script>

<style scoped>
    .table{
        margin-bottom: 20px;
    }
</style>
