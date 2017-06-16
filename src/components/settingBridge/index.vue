<script>
    import vueForm from '../vueForm'
    import vue from 'vue'
    import _ from 'lodash'
    let vNodeTemp = {};
    let settingIdTemp = 0;
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        props: {
            settingData: Object,
            instance: Object,
        },
        components: {
            vueForm,
        },
        mounted: function () {
            this.vueFormEl = document.getElementById(`${this.uuid}formHook`)
        },
        render(h){
            if(this.settingData.id !== settingIdTemp){
                settingIdTemp = this.settingData.id;
                var settingData = _.cloneDeep(this.settingData)
                var vueFormElement = {}
                var defaultSetting = {
                    extends: vueForm
                }
                if(this.instance.submitData){
                    defaultSetting.submitData = this.instance.submitData
                }
                var vueFormSetting = vue.util.mergeOptions(defaultSetting, settingData)
                if (!_.isEmpty(settingData)) {
                    vueFormElement = h(vueFormSetting, {
                        ref: 'vueForm',
                        on: {
                            submit: this.handleSubmit
                        }
                    })
                }
                vNodeTemp =  (
                        <div id="settingBridge">
                            <div id={`${this.uuid}formHook`}>
                                {vueFormElement}
                            </div>
                        </div>
                )
            }

            return vNodeTemp;
        },
        methods: {
            handleSubmit: function (data) {
                this.instance['submitData'] = data
                if(data){
                    this.$emit('changeItem', data)
                }
            }
        }
    }
</script>
<style lang="less">

</style>
