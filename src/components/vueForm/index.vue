<style>

</style>
<script>
    import _ from 'lodash'
    import templateInput from '../templateInput'
    export default{
        name: 'vueForm',
        props: {},
        render: function (h) {
            return (
                    <div class="vueForm">
                        <el-form ref="ruleForm"
                                 label-width="80px"
                                 class="demo-ruleForm">
                            {
                                (()=> {
                                    let formItems = this.sortChildComponentData.map(function (childComponentData, key) {
                                        var item = childComponentData.item
                                        return (
                                                <el-form-item label={item.label}
                                                              v-show={item.hidden !== true}>
                                                    {h(item.type, {
                                                        ref: childComponentData.key,
                                                        props: item.componentData,
                                                        on: {
                                                            input: (e) => {
                                                                item.componentData.value = e
                                                            }
                                                        }
                                                    })}
                                                </el-form-item>
                                        )
                                    })
                                    formItems.push(
                                            (<el-form-item label='ref'>
                                                {h('el-input', {
                                                    ref: 'ref',
                                                    props: {
                                                        value: this.ref
                                                    },
                                                    on: {
                                                        input: (e) => {
                                                            this.ref = e
                                                        }
                                                    }
                                                })}
                                            </el-form-item>)
                                    )
                                    return formItems
                                })()
                            }
                        </el-form>
                    </div>
            )
        },
        watch: {
            submitData: {
                deep: true,
                handler: function (newVal) {
                    this.$emit('submit', newVal)
                }
            }
        },
        methods: {},
        data(){
            var setting = this.$options.setting
            var sortChildComponentData = []
            var result = {
                ref:''
            }
            _.forEach(setting, function (item, key) {
                result[key] = item.componentData
                result[key + 'Setting'] = item
                sortChildComponentData.push({
                    key,
                    item
                });
            });
            result.sortChildComponentData = sortChildComponentData
            return result
        },
        mounted: function () {
            var submitData = this.$options.submitData
            if (submitData) {
                if (this.backFill) {
                    this.backFill(submitData)
                }
            }
        },
        computed: {},
        components: {
            templateInput,

        },
    }


</script>
