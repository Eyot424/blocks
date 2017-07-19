<template>
    <div class="radios">
        <el-radio-group :value="radioValue" @input="radioValueChange">
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
                    {
                        value: 'test',
                        label: '默认'
                    }
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
                // radioValue: ''
            }
        },
        computed: {
            radioValue: function() {
                
            }
        },
        watch: {
            radioRef: function() {
                this.commitState()
            },
            radioValue: function() {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.radioRef,
                    value: this.radioValue
                }
                if(this.$store.state.getFormPageData) {
                    this.$store.commit('setFormPageData', data)
                }
                if(this.$store.state.getFormData) {
                    this.$store.commit('setFormData', data)
                }
            },
            radioValueChange(value) {
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
