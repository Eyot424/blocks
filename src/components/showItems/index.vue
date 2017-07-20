<template>
    <div class="selectedItemList">
        <template v-for="item in items">
                <span class="selectedItem">
                    <i v-show="!disabled"
                       @click="changeItems(item)">+</i>
                    {{item && item.name}}</span>
        </template>
    </div>
</template>
<style lang="less"
       rel="stylesheet/less"
       scoped>
    .selectedItemList {
        border-top-left-radius: 0;
        padding-bottom: 10px;
        .defaultText {
            text-align: center;
            span {
                letter-spacing: 1px;
                padding: 5px 20px;
                border-bottom: 1px solid #e4e4e4;
            }
        }
        .selectedItem {
            display: inline-block;
            cursor: pointer;
            height: 30px;
            line-height: 30px;
            padding: 0 15px;
            border-radius: 3px;
            border: solid 1px #ddd;
            background: #f6f6f6;
            position: relative;
            margin: 10px 20px 0 0;
            i {
                position: absolute;
                display: inline-block;
                height: 1.2em;
                width: 1.2em;
                font-size: 16px;
                line-height: 1.2;
                text-align: center;
                transform: rotate(45deg);
                background: #ff2d4b;
                opacity: 0.6;
                border-radius: 100%;
                right: -0.6em;
                top: -0.4em;
                cursor: pointer;
            }
        }
    }
</style>
<script>
    export default{
        name: 'showItems',
        props: {
            items: {
                type: Array,
                default: function () {
                    return []
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            changeItems: function (removeItem) {
                var itemIds = [];
                this.items.map(function (item, index) {
                    if (item.value !== removeItem.value) {
                        itemIds.push(item.value)
                    }
                });
                this.$emit('change', itemIds);
            }
        }
    }
</script>
