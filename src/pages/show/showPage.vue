<template>
    <span>
        <engine :config="config" :map-config="mapConfig">
        </engine>
    </span>
</template>

<script>
    import config from './config_form'
    import mapConfig from './mapConfig_form'
    import engine from '@/components/engine/engine.js'


    export default {
        name: 'App',
        components: {
            engine
        },
        data: function () {
            return {
                config,
                mapConfig
            }
        },
        watch: {
        }
    }
</script>

<style lang="less"
       rel="stylesheet/less">

</style>
