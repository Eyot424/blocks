<template>
    <div class="selects">
        <div v-if="$engine.globalObj.pageState !== 'detail'">
            <el-select :value="selectValue" placeholder="请选择" @input="optionChange" :disable="disabled">
                <el-option
                        v-for="item in allData"
                        :key="item.label"
                        :label="item.label"
                        :value="item.value"
                        :disabled="disabled">
                </el-option>
            </el-select>
            <span>{{detail}}</span>
        </div>
        <div v-else>
            <span v-for="item in allData"
                  :key="item.label"
                  v-if="selectValue === item.value">
                {{item.label}}&nbsp&nbsp&nbsp&nbsp
            </span>
        </div>
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
            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        data() {
            return {
                // selectValue: ''
            }
        },
        computed: {
            selectValue: function() {

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
