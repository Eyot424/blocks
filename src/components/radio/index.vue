<template>
    <div class="radios">
        <el-radio-group v-model="selfRadioValue" @change="changeRadioValue">
            <el-radio v-for="item in allRadioData" :key="item.label" :label="item.value">{{item.label}}</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: 'radio',
        props: {
            allRadioData: {
                type: Array,
                default: [
                ]
            },
            radioRef: {
                type: String,
                default: ''
            },
            changeRadioValue: {
                type: Function
            }
        },
        data() {
            return {
                selfRadioValue: ''
            }
        },
        computed:{
            radioValue:function () {
                return this.selfInputValue
            }
        },
        watch: {
            radioRef: function() {
                this.commitState()
            },
            radioValue: function(value) {
                this.selfRadioValue = value
                this.commitState()
            },
            selfRadioValue: function(value) {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.radioRef,
                    value: this.selfRadioValue
                }
                if(this.$store.state.getFormPageData) {
                    this.$store.commit('setFormPageData', data)
                }
                if(this.$store.state.getFormData) {
                    this.$store.commit('setFormData', data)
                }
            },
            changeRadioValue(value) {
                if(this.changeRadioValue) {
                    this.changeRadioValue(value);
                }
            }
        }
    }
</script>

<style scoped>
    .radios{
        margin-bottom: 20px;
    }
</style>
