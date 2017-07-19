<template>
    <div class="radios">
        <el-radio-group v-model="radioValue">
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
            }
        },
        data() {
            return {
                radioValue: ''
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
            }
        }
    }
</script>

<style scoped>
    .radios{
        margin-bottom: 20px;
    }
</style>
