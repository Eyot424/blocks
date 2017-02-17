<template>
    <div class="datePicker">
        <el-date-picker
                v-model="value"
                type="datetimerange"
                :format="datetimeRangeFormat"
                placeholder="选择日期">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: 'dateTimeRangePicker',
        props: {
            datetimeRangeFormat: {
                type: String,
                default: 'yyyy-MM-dd-HH-mm-ss'
            }
        }
    }
</script>
