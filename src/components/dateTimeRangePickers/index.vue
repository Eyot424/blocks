<template>
    <div class="dateTimePicker">
        <div v-if="pageState !== 'detail'">
            <el-date-picker
                    :value="dateTimeStartValue" @input="changeStartDateTimeValue"
                    type="datetime"
                    :placeholder="placeholderStart"
                    :picker-options="pickerStartOptions"
                    :disabled="disabled">
            </el-date-picker>
            到
            <el-date-picker
                    :value="dateTimeEndValue" @input="changeEndDateTimeValue"
                    type="datetime"
                    :placeholder="placeholderEnd"
                    :picker-options="pickerEndOptions"
                    :disabled="disabled">
            </el-date-picker>
            <span>{{detail}}</span>
        </div>
        <div v-else>
            <template v-if="dateTimeStartValue && dateTimeEndValue && ('toLocaleString' in Date)">
                {{dateTimeStartValue.toLocaleString() - dateTimeEndValue.toLocaleString()}}
            </template>
        </div>
    </div>
</template>

<script>
    import pageStateMixin from '@/mixin/pageState'
    export default {
        name: 'dateTimeRangePickers',
        mixins:[pageStateMixin],
        props: {
            placeholderStart: {
                type: String,
                default() {
                    return ''
                }
            },
            placeholderEnd: {
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
            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            },
            changeStartDateTimeValue: {
                type: Function
            },
            changeEndDateTimeValue: {
                type: Function
            },
            pickerStartOptions: {
                type: Object,
                default() {
                    return {}
                }
            },
            pickerEndOptions: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                
            }
        },
        computed:{
            dateTimeStartValue:function () {

            },
            dateTimeEndValue:function () {

            }
        },
        watch: {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .dateTimePicker{
        margin-bottom: 20px;
    }
</style>
