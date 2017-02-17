import uuid from './uuid'
import vue from 'vue'
export default {
    mixins: [uuid],
    methods: {
        appendByEl: function (el, options) {
            var newDiv = document.createElement("div");
            // newDiv.setAttribute('id',)
            var id = document.createAttribute("id");
            id.value = this.createUuid();
            newDiv.setAttributeNode(id);
            el.appendChild(newDiv);
            return new vue(Object.assign(options, {
                el: `#${id.value}`
            }))
        }
    }
}
