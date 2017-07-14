<template>
    <div class="dateRangePicker">
        <el-date-picker
                v-model="value"
                type="daterange"
                :placeholder="placeholder">
        </el-date-picker>
        {{detail}}
    </div>
</template>

<script>
    export default {
        name: 'dateRangePicker',
        props: {
            // dateRangeFormat: {
            //     type: Array,
            //     default(){
            //         return ['yyyy-MM-dd','yyyy-MM-dd']
            //     } 
            // },
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
    .dateRangePicker{
        margin-bottom: 20px;
    }
</style>
