<template>
    <div class="inlineBox">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'inlineBox',
        props: {
            labelText: {
                type: String,
                default: '请输入内容'
            },
            inputIcon: {
                type: String,
                default: 'search'
            }
        }
    }
</script>
<style lang="less"
       rel="stylesheet/less"
       scoped>
    .inlineBox {
        .canvasSortable {
            width: 100%;
            display: flex;
            justify-content: space-around;
            min-height: 50px;
        }
    }
</style>
