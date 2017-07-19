<template>
    <div class="dateTimeRangePicker">
        <el-date-picker
                v-model="selfDateTimeRangeValue"
                type="datetimerange"
                placeholder="选择日期"
                :placeholder="placeholder"
                :picker-options="pickerOptions"
                @change="changeDateTimeRangeValue">
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
            selfDateTimeRangeValue: {
                type: Array,
                default() {
                    return []
                }
            },
            dateTimeRangeValue: {
                type: Function
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
