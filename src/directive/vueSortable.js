import Sortable from 'sortablejs'
export default {
    bind:function (el,binding) {
        var sortable = new Sortable(el, binding.value);
    }
}
