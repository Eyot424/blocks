<template>
    <div class="dateRangePicker">
        <el-date-picker
                v-model="value"
                type="daterange"
                placeholder="选择日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: 'dateRangePicker',
        props: {
        }
    }
</script>

<style scoped>
    .dateRangePicker{
        margin: 20px 0;
    }
</style>
