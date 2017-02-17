<template>
    <div>
        <template v-for="(item, $index) in inputTexts"
                  track-by="$index">
            <template v-if="$index !== inputTexts.length - 1">
                {{item}}
                <span class="pdboth5">
                <input name=""
                       type="text"
                       :disabled="disabledArr ? disabledArr[$index] : false"
                       class="form-control mini"
                       v-model="inputValue[$index]">
            </span>
            </template>
            <template v-else>
                {{item}}
            </template>
        </template>
    </div>
</template>
<style></style>
<script>
    export default{
        props: {
            template:{
                type:String
            },
            inputValue:{
                type:Array
            },
            disabledArr:{
                type:Array,
                default:function () {
                    return []
                }
            }
        },
        data: function () {
            return {
            }
        },
        computed: {
            inputTexts: function () {
                return this.template.split('%i')
            }
        }
    }
</script>
