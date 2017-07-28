export default {
    computed:{
        pageState: function () {
            let $engine = this.$engine;
            if ($engine && $engine.globalObj) {
                return $engine.globalObj.pageState
            }
            return ''
        }
    }
}
