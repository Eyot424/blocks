<template>
    <div class="dateTimeRangePicker">
        <el-date-picker
                :value="selfDateTimeRangeVal"
                @input="changeDateTimeRangeValue"
                type="datetimerange"
                placeholder="选择日期"
                :placeholder="placeholder"
                :picker-options="pickerOptions">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        name: 'dateTimeRangePicker',
        props: {
            placeholder: {
                type: String,
                default() {
                    return ''
                }
            },
            detail: {
                type: String,
                default() {
                    return ''
                }
            },
            dateTimeRangeValue: {
                type: Function
            }
        },
        computed: {
            dateTimeRangeVal: function() {
                return this.selfDateTimeRangeVal
            }
        },
         watch: {
            dateTimeRangeVal: function(value) {
                this.selfDateTimeRangeVal = value
            },
            selfDateTimeRangeVal: function() {

            }
        },
        methods: {
            changeDateTimeRangeValue(value) {
                if(this.dateTimeRangeValue) {
                    this.dateTimeRangeValue(value)
                }
            }
        }
    }
</script>

<style scoped>
    .dateTimeRangePicker{
        margin-bottom: 20px;
    }
</style>
