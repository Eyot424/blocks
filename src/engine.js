import Vue from 'vue';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
let cloneDeep = require('lodash').cloneDeep

import breadCrumb from './components/breadCrumb'
import button from './components/button'
import checkBox from './components/checkBox'
import datePicker from './components/datePicker'
import dateRangePicker from './components/dateRangePicker'
import dateTimePicker from './components/dateTimePicker'
import dateTimeRangePicker from './components/dateTimeRangePicker'
import form from './components/form'
import inlineBox from './components/inlineBox'
import input from './components/input'
import inputWithLabel from './components/inputWithLabel'
import radio from './components/radio'
import select from './components/select'
import upload from './components/upload'
import table from './components/table'

export default{
    name: 'engine',
    props: {
        config: {
            type: Object,
            default: function () {
                return {
                    renderData: []
                }
            }
        },
        mapConfig: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    data: function() {
        return {
            componentList: [
                breadCrumb,
                button,
                checkBox,
                datePicker,
                dateTimePicker,
                dateRangePicker,
                dateTimeRangePicker,
                form,
                inlineBox,
                input,
                inputWithLabel,
                radio,
                select,
                upload,
                table
            ]
        }
    },
    computed: {
        freezeConfig: function () {
            return cloneDeep(this.config);
        },
        freezeMapConfig: function () {
            return cloneDeep(this.mapConfig);
        }
    },
    methods: {
        getComponent: function (ref) {
            var refComponent;
            refComponent = this.$options.components[ref]
            if (!refComponent) {
                refComponent = Vue.component(ref)
            }
            if (refComponent) {
                return refComponent
            }
            return false;
        },
        mergeOptionsByMapConfig: function (component, data, itemMapConfig) {
            var vuexSetting = cloneDeep(itemMapConfig.vuex);
            var extend = itemMapConfig.extend || {};
            var config = itemMapConfig.data || {};
            var options = {};
            if(vuexSetting){
                options = {
                    computed: {
                        ...extend.computed,
                        ...mapState(vuexSetting.state ? vuexSetting.state : {}),
                        ...mapGetters(vuexSetting.getters ? vuexSetting.getters : {})
                    },
                    methods: {
                        ...extend.methods,
                        ...mapMutations(vuexSetting.mutations ? vuexSetting.mutations : {}),
                        ...mapActions(vuexSetting.actions ? vuexSetting.actions : {})
                    }
                };
            }
            Object.assign(extend, options)
            Object.assign(data, config)
            var result = component.extend(extend);
            return result;
        },
        createVnode: function (h, item) {
            var data = cloneDeep(item.data || {});
            var mapConfig = this.freezeMapConfig;
            var definition = item.tag;
            var children = [];
            var result;
            if (data && data.ref) {
                var ref = data.ref;
                var itemMapConfig = mapConfig[ref];
                if (itemMapConfig) {
                    definition = this.getComponent(item.tag)
                    result = this.mergeOptionsByMapConfig(definition, data, itemMapConfig)
                }
            }
            if (item.children) {
                var cloneChildren = cloneDeep(item.children)
                cloneChildren.forEach((childItem) => {
                            if (typeof childItem === 'string') {
                                children.push(childItem);
                            }
                            children.push(this.createVnode(h, childItem));
                        }
                )
            }
            if (result) {
                return h(result, data, children);
            }
            return h(definition, data, children);


        }
    },
    render: function (_h) {
        this.$data.componentList.map((item, index) => {
            Vue.component(item.name, item);
        })
        var wrapVnode = this.createVnode(
                _h, {
                    tag: 'div',
                    data: {},
                    children: cloneDeep(this.freezeConfig.renderData)
                }
        );
        return wrapVnode

    },
    components: {}
}
