<template>
    <div class="logWrap">
        <el-table style="width: 100%" :data="logData">
            <template v-for="(item,index) in columnData">
                <el-table-column :prop="item.prop"
                                 :label="item.label"
                                 key="index"></el-table-column>
            </template>
        </el-table>
        <el-pagination :page-size="20"
                       :current-page="currentPage"
                       @current-change="handleCurrentChange"
                       :page-sizes="[20, 50, 100]"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="50"></el-pagination>
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
        data(){
            return {
                currentPage: 1,
                logData: []
            }
        },
        method: {
            handleCurrentChange(){
                this.currentPage = val;
            }
        },
        mounted(){
            if(this.customFetch){
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
