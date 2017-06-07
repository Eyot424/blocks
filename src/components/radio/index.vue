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
                default: [{
                    value: 'test',
                    label: '默认'
                }]
            },
            radioValue: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .radios{
        margin: 20px 0;
    }
</style>
