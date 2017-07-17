<template>
    <div class="checkBox">
        <el-checkbox-group v-model="checkList">
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
            checkList: {
                type: Array,
                default() {
                    return []
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
            }
        },
        mounted() {
            if(this.getAllCheckData) {
                this.getAllCheckData();
            }
        },
        computed:{
            
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
                this.$store.commit('setFormData', data)
            }
        }
    }
</script>

<style scoped>
    .checkBox{
        margin-bottom: 20px;
    }
</style>
