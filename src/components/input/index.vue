<template>
    <div class="inputs">
        <el-input :value="selfInputValue" @input="updateValue" :icon="inputIcon" :placeholder="placeholder"></el-input>
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
            inputValue: {
                type: String,
                default: ''
            },
            mutationName: {
                type: String,
                default: ''
            },
            stateName: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                selfInputValue: ''
            }
        },
        computed: {
            selfInputValue() {
                return this.$store.state[this.stateName][this.inputRef]
            }
        },
        watch: {
            inputRef: function() {
                this.commitState(this.mutationName)
            },
            inputValue: function(value) {
                this.selfInputValue = value
                this.commitState(this.mutationName)
            },
            selfInputValue: function() {
                this.commitState(this.mutationName)
            }
        },
        methods: {
            commitState(mutationName) {
                let data = {
                    ref: this.inputRef,
                    value: this.selfInputValue
                }
                this.$store.commit(mutationName, data)
            },
            updateValue(value) {
                this.selfInputValue = value
            }
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
