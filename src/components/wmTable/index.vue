<script>
    export default {
        props: {
        },
        render: function (h) {
            var column = [];
            if (this.columnData.length) {
                column = this.columnData.map(function (item) {
                    return (
                            <el-table-column prop={item.prop}
                                             label={item.label}>
                            </el-table-column>
                    )
                })
            }

            return (
                    <div>
                        <el-table>
                            {column}
                        </el-table>
                    </div>)
        },
        name: 'wmTable',
        data(){
            return {
                columnData:[]
            }
        },
        components: {}
    }
</script>
