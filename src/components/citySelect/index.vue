<template>
    <div class="citySelect">
        <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'cityselect',
        props: {
            inputIcon: {
                type: String,
                default: 'search'
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: auto;
    }
</style>
