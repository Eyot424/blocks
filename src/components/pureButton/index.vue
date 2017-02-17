<template>
    <div class="pureButton">
        <el-button :icon="buttonIcon" :type="buttonType">{{ buttonText }}</el-button>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'pureButton',
        props: {
            buttonText: {
                type: String,
                default: '提交'
            },
            buttonIcon: {
                type: String,
                default: 'plus'
            },
            buttonType: {
                type: String,
                default: 'primary'
            }
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>
