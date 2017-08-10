<template>
    <span>
        <engine :config="config" :map-config="mapConfig" ref="engine" :global-obj="engineGlobalObj">
        </engine>
    </span>
</template>

<script>
    import config from './config_form.js'
    import mapConfig from './mapConfig_form.js'
    import vuex from 'vuex'
    import engine from '@/components/engine/engine.vue'


    export default {
        name: 'App',
        components: {
            engine
        },
        mounted(){
            vuex.engine = this.$refs.engine;
        },
        data: function () {
            return {
                config,
                mapConfig,
                engineGlobalObj: {
                    pageState: 'detail'
                }
            }
        },
        watch: {
        }
    }
</script>

<style lang="less"
       rel="stylesheet/less">

</style>
