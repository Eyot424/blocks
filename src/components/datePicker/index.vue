<template>
    <div class="datePicker">
        <el-date-picker
            v-model="dateValue"
            :format="dateFormat"
            type="date"
            :placeholder="placeholder"
            :picker-options="pickerOptions">
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
                default: 'yyyyMMdd'
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
            dateRef: {
                type: String,
                default: ''
            },
            dateValue: {
                type: String,
                default() {
                    return ''
                }
            },
            pickerOptions: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        watch: {
            dateRef: function() {
                this.commitState()
            },
            dateValue: function() {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.dateRef,
                    value: this.dateValue
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
    .datePicker{
        margin-bottom: 20px;
    }
</style>
