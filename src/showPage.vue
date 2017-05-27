<template>
    <span>
        <engine :config="config" :map-config="mapConfig">
        </engine>
    </span>
</template>

<script>
    import config from './config'
    import mapConfig from './mapConfig'
    import engine from './engine.js'


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
