<template>
    <div class="citySelect">
        <!-- <el-autocomplete class="inline-input" :fetch-suggestions="querySearch" placeholder="请输入内容"></el-autocomplete> -->
    </div>
</template>

<script>
    import axios from 'axios'
    const cityListUrl = '//wmmis.wmaudit.baidu.com/huodong/mis/transmit?url=%2F%3Fqt%3Dgetcitylist%26type%3D1';
    export default {
        name: 'cityselect',
        methods: {
            // querySearch() {
            //     axios.get(cityListUrl)
            //     .then(response => response.data)
            //     .catch(error => []);
            // },
        }
    }
</script>

<style scoped>
    .el-input{
        width: auto;
    }
</style>
