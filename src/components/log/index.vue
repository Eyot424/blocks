<template>
    <div class="logWrap">
        <el-table style="width: 100%" :data="logData">
            <template v-for="(item,index) in columnData">
                <el-table-column :prop="item.prop"
                                 :label="item.label"
                                 key="index"></el-table-column>
            </template>
        </el-table>
        <el-pagination :page-size="pageSize"
                       :current-page="currentPage"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :page-sizes="[20, 50, 100]"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'log',
        props: {
            url: {
                type: String,
                default: ''
            },
            columnData: {
                type: Array,
                default(){
                    return [
                        {
                            prop: 'default',
                            label: '表头1'
                        }
                    ]
                }
            },
            customFetch: {
                type: Function,
            }
        },
        computed:{
            logData(){},
            total(){},
            currentPage(){
                return 1
            },
            pageSize(){}
        },
        data(){
            return {
            }
        },
        method: {
            handleCurrentChange(){
            },
            handleSizeChange(){
            }
        },
        mounted(){
            if(this.customFetch){
                debugger
                this.customFetch();
            }
        }
    }
</script>
<style lang="less"
       rel="stylesheet/less"
       scoped>
    .logWrap{
       margin: 20px 0;
    }
</style>
