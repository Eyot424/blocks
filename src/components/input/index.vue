<template>
    <div class="inputs">
        <el-input :value="selfInputValue" @input="changeInputValue" :icon="inputIcon" :placeholder="placeholder"></el-input>
    </div>
</template>

<script>
    export default {
        name: 'inputs',
        props: {
            inputIcon: {
                type: String,
                default() {
                    return ''
                }
            },
            placeholder: {
                type: String,
                default() {
                    return '请输入内容'
                }
            },
            inputRef: {
                type: String,
                default: ''
            },
            changeInputValue: {
                type: Function
            }
        },
        data() {
            return {
                selfInputValue: ''
            }
        },
        computed:{
            inputValue:function () {
                return this.selfInputValue
            }
        },
        watch: {
            inputRef: function() {
                this.commitState()
            },
            inputValue: function(value) {
                this.selfInputValue = value
                this.commitState()
            },
            selfInputValue: function(value) {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.inputRef,
                    value: this.selfInputValue
                }
                if(this.$store.state.getFormPageData) {
                    this.$store.commit('setFormPageData', data)
                }
                if(this.$store.state.getFormData) {
                    this.$store.commit('setFormData', data)
                }
            },
        }
    }
</script>

<style scoped>
    .el-input{
        width: auto;
    }

    .inputs{
        margin-bottom: 20px;
    }
</style>
