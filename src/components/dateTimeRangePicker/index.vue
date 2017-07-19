<template>
    <div class="dateTimeRangePicker">
        <el-date-picker
                :value="dateTimeRangeVal"
                @input="changeDateTimeRangeValue"
                type="datetimerange"
                placeholder="选择日期"
                :placeholder="placeholder"
                :picker-options="pickerOptions"
                :disabled="disabled">
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
            },
            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        computed: {
            dateTimeRangeVal: function() {
                
            }
        },
        watch: {
        },
        methods: {
            changeDateTimeRangeValue(value) {
                if(this.dateTimeRangeValue) {
                    this.dateTimeRangeValue(value)
                }
                this.dateTimeRangeVal = value;
            }
        }
    }
</script>

<style scoped>
    .dateTimeRangePicker{
        margin-bottom: 20px;
    }
</style>
