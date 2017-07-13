<template>
    <div class="datePicker">
        <el-date-picker
            v-model="value"
            :format="dateFormat"
            type="date"
            :placeholder="placeholder"
            ::picker-options="pickerOptions">
        </el-date-picker>
        {{detail}}
    </div>
</template>

<script>
    export default {
        name: 'datePicker',
        props: {
            dateFormat: {
                type: String,
                default: 'yyyy-MM-dd'
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
            },
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            }
        }
    }
</script>

<style scoped>
    .datePicker{
        margin-bottom: 20px;
    }
</style>
