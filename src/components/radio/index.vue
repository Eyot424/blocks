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
                    // {
                    //     value: 'test',
                    //     label: '默认'
                    // }
                ]
            },
            radioRef: {
                type: String,
                default: ''
            },
            radioValue: {
                type: String,
                default: ''
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
                this.$store.commit('setFormData', data)
            }
        }
    }
</script>

<style scoped>
    .radios{
        margin-bottom: 20px;
    }
</style>
