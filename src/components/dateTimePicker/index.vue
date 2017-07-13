<template>
    <div class="dateTimePicker">
        <el-date-picker
                type="datetime"
                :format="datetimeFormat"
                :placeholder="placeholder">
        </el-date-picker>
        <span>{{detail}}</span>
    </div>
</template>

<script>
    export default {
        name: 'dateTimePicker',
        props: {
            datetimeFormat: {
                type: String,
                default: 'yyyy-MM-dd-HH-mm-ss'
            },
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
            }
        }
    }
</script>

<style scoped>
    .dateTimePicker{
        margin-bottom: 20px;
    }
</style>
