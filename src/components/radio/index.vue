<template>
    <div class="radios">
        <el-radio-group v-model="radioValue">
            <el-radio v-for="item in allRadioData" :label="item.value">{{item.label}}</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: 'radios',
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
