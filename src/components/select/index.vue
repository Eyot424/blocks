<template>
    <div class="selects">
        <el-select v-model="selectValue" placeholder="请选择">
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
                    ref: this.checkRef,
                    value: this.checkList
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
    .selects{
        margin-bottom: 20px;
    }
</style>
