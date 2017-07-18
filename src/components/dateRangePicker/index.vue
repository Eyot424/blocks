<template>
    <div class="dateRangePicker">
        <el-date-picker
                v-model="dateRangeValue"
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
            dateRangeRef: {
                type: String,
                default: ''
            },
            dateRangeValue: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        watch: {
            dateRangeRef: function() {
                this.commitState()
            },
            dateRangeValue: function() {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.dateRangeRef,
                    value: this.dateRangeValue
                }
                if(this.$store.state.getFormPageData) {
                    this.$store.commit('setFormPageData', data)
                }
                if(this.$store.state.getFormData) {
                    this.$store.commit('setFormData', data)
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
