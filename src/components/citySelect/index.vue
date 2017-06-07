<template>
    <div class="citySelect">
        <el-autocomplete class="inline-input" v-model="cityModel" :fetch-suggestions="querySearch" placeholder="请输入内容"></el-autocomplete>
    </div>
</template>

<script>
    import axios from 'axios'
    const cityListUrl = '/huodong/mis/transmit?url=%2F%3Fqt%3Dgetcitylist%26type%3D1';
    import cityList from './city.js'
    export default {
        name: 'citySelect',
        props: {
            cityModel: {
                type: String,
                default: ''
            },
        },
        methods: {
            querySearch(queryString, cb) {
                var citys = this.citys;
                var results = queryString ? citys.filter(this.createFilter(queryString)) : citys;
                cb(results);
            },
            createFilter(queryString) {
                return (city) => {
                    return (city.value.indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleData(list) {
                let listArray =[];
                list.map(item => {
                    listArray.push({
                        value: item.city_name,
                        id: item.id
                    })
                })
                return listArray;
            }
        },
        mounted() {
            axios.get(cityListUrl)
            .then(response => {
                this.citys = this.handleData(response.data);
            })
            .catch(error => {
                this.citys = this.handleData(cityList.data);
            });
        }
    }
</script>
