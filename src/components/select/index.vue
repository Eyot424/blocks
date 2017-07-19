<template>
    <div class="selects">
        <el-select v-model="selectValue" placeholder="请选择" @change="optionChange" v-show="selectShow">
            <el-option
                v-for="item in allData"
                :key="item.label"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <span>{{detail}}</span>
    </div>
</template>

<script>
    export default {
        name: 'selects',
        props: {
            allData: {
                type: Array,
                default() {
                    return [{
                        label: '请选择',
                        value: ''
                    }]
                }
            },
            selectRef: {
                type: String,
                default: ''
            },
            selectValue: {
                type: String,
                default: ''
            },
            detail: {
                type: String,
                default() {
                    return ''
                }
            },
            getAllData: {
                type: Function
            },
            changeOption: {
                type: Function
            },
            selectShow: {
                type: Boolean,
                default() {
                    return true
                }
            }
        },
        data() {
            return {
                selectValue: ''
            }
        },
        mounted() {
            if(this.getAllData) {
                this.getAllData();
            }

        },
        watch: {
            selectRef: function() {
                this.commitState()
            },
            selectValue: function() {
                this.commitState()
            }
        },
        methods: {
            commitState() {
                let data = {
                    ref: this.selectRef,
                    value: this.selectValue
                }
                if(this.$store.state.getFormPageData) {
                    this.$store.commit('setFormPageData', data)
                }
                if(this.$store.state.getFormData) {
                    this.$store.commit('setFormData', data)
                }
            },
            optionChange(value) {
                if(this.changeOption) {
                    this.changeOption(value);
                }
            }
        }
    }
</script>

<style scoped>
    .selects{
        margin-bottom: 20px;
    }
</style>
