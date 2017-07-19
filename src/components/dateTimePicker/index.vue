<template>
    <div class="dateTimePicker">
        <div v-if="$engine.globalObj.pageState !== 'detail'">
            <el-date-picker
                    v-model="selfDateTimeValue" @change="changeDateTimeValue"
                    type="datetime"
                    :placeholder="placeholder"
                    :picker-options="pickerOptions">
            </el-date-picker>
            <span>{{detail}}</span>
        </div>
        <div v-else>
            {{selfDateTimeValue}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dateTimePicker',
        props: {
            // datetimeFormat: {
            //     type: String,
            //     default: 'yyyy-MM-dd HH-mm-ss'
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
            },
            /*selfDateTimeValue: {
                type: String,
                default() {
                    return ''
                }
            },*/
            changeDateTimeValue: {
                type: Function
            },
            pickerOptions: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
//                selfDateTimeValue: ''
            }
        },
        computed:{
            selfDateTimeValue:function () {
                return ''
            },
            dateTimeValue:function () {
                return this.selfDateTimeValue
            }
        },
        watch: {
            dateTimeRef: function() {
                this.commitState()
            },
            dateTimeValue: function(value) {
                this.selfDateTimeValue = value
                this.commitState()
            },
            selfDateTimeValue: function(value) {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.dateTimeRef,
                    value: this.selfDateTimeValue
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
    .dateTimePicker{
        margin-bottom: 20px;
    }
</style>
