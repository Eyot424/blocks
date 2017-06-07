<template>
    <div class="datePicker">
        <el-date-picker
            v-model="value"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: 'datePicker',
        props: {
        }
    }
</script>

<style scoped>
    .datePicker{
        margin: 20px 0;
    }
</style>
