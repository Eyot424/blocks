<template>
    <div>
        <div class="inputs" v-if="$engine.globalObj.pageState !== 'detail'">
            <el-input :value="inputValue" @input="changeInputValue" :icon="inputIcon" :placeholder="placeholder" :disabled="disabled" :type="inputType"></el-input>
            <div v-bind:style="{color: detailColor}">{{detail}}</div>
        </div>
        <div v-else>
            <div>{{inputValue}}</div>
        </div>
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
            inputValueChange: {
                type: Function
            },
            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            },
            inputType: {
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
            detailColor: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        data() {
            return {
               
            }
        },
        computed:{
            inputValue:function () {
                
            }
        },
        watch: {
            inputRef: function() {
                this.commitState()
            },
            inputValue: function(value) {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.inputRef,
                    value: this.inputValue
                }
                if(this.$store.state.getFormPageData) {
                    this.$store.commit('setFormPageData', data)
                }
                if(this.$store.state.getFormData) {
                    this.$store.commit('setFormData', data)
                }
            },
            changeInputValue(value) {
                if(this.inputValueChange) {
                    this.inputValueChange(value);
                }
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: 300px;
    }

    .inputs{
        display: inline-block;
        margin-bottom: 20px;
    }
    .el-textarea {
        width: 500px;
    }
    .detail {
        color: red;
    }
</style>
