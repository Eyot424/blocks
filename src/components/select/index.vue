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
    </div>
</template>

<script>
    export default {
        name: 'selects',
        props: {
            allData: {
                type: Array,
                default: [{
                    label: '默认',
                    value: '1'
                }]
            },
            selectRef: {
                type: String,
                default: ''
            },
            selectValue: {
                type: String,
                default: ''
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
                this.$store.commit('setFormData', data)
            }
        }
    }
</script>

<style scoped>
    .selects{
        margin-bottom: 20px;
    }
</style>
