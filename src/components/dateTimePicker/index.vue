<template>
    <div class="dateTimePicker">
        <el-date-picker
                v-model="value"
                type="datetime"
                :format="datetimeFormat"
                placeholder="选择日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: 'dateTimePicker',
        props: {
            datetimeFormat: {
                type: String,
                default: 'yyyy-MM-dd-HH-mm-ss'
            }
        }
    }
</script>

<style scoped>
    .dateTimePicker{
        margin: 20px 0;
    }
</style>
