<template>
    <div class="dateTimePicker">
        <div v-if="pageState !== 'detail'">
            <el-date-picker
                    :value="dateTimeValue" @input="changeDateTimeValue"
                    type="datetime"
                    :placeholder="placeholder"
                    :picker-options="pickerOptions">
            </el-date-picker>
            <span>{{detail}}</span>
        </div>
        <div v-else>
            <template v-if="dateTimeValue && ('toLocaleString' in Date)">
                {{dateTimeValue.toLocaleString()}}
            </template>
        </div>
    </div>
</template>

<script>
    import pageStateMixin from '@/mixin/pageState'
    export default {
        name: 'dateTimePicker',
        mixins:[pageStateMixin],
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
                // dateTimeValue: ''
            }
        },
        computed:{
            dateTimeValue:function () {

            }
        },
        watch: {
            dateTimeRef: function() {
                this.commitState()
            },
            dateTimeValue: function(value) {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.dateTimeRef,
                    value: this.dateTimeValue
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
