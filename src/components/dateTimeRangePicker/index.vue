<template>
    <div class="dateTimeRangePicker">
        <el-date-picker
                :value="dateTimeRangeValue"
                @input="dateTimeRangeValueChange"
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
            dateTimeRangeValueChange: {
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
            dateTimeRangeValue: function() {
                
            }
        },
        watch: {
        },
        methods: {

        }
    }
</script>

<style scoped>
    .dateTimeRangePicker{
        margin-bottom: 20px;
    }
</style>
