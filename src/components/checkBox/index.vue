<template>
    <div class="checkBox">
        <el-checkbox-group :value="checkList" @input="valueChange">
            <el-checkbox v-for="item in allCheckData" :key="item.label" :label="item.value">{{item.label}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'checkBox',
        props: {
            allCheckData: {
                type: Array,
                default() {
                        return [
                        {
                            value: 'test',
                            label: '默认',
                            checked: false
                        }
                    ]
                }
            },
            checkRef: {
                type: String,
                default() {
                    return ''
                }
            },
            getAllCheckData: {
                type: Function
            },
            changeValue: {
                type: Function
            }
        },
        data() {
            return {
            }
        },
        mounted() {
            if(this.getAllCheckData) {
                this.getAllCheckData();
            }
        },
        computed:{
            checkList: function(){

            }      
        },
        watch: {
            checkRef: function() {
                this.commitState()
            },
            checkList: function() {
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
            },
            valueChange(value) {
                if(this.changeValue) {
                    this.changeValue(value);
                }
            }
        }
    }
</script>

<style scoped>
    .checkBox{
        margin-bottom: 20px;
    }
</style>
