<template>
    <div class="datePicker">
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
