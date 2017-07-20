import Vue from 'vue';
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import Vuex from 'vuex'
import _ from 'lodash'

window.Vue = Vue
window.Vuex = Vuex
window._ = _

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.use(Vuex)

import breadCrumb from '@/components/breadCrumb'
import button from '@/components/button'
import checkBox from '@/components/checkBox'
import datePicker from '@/components/datePicker'
import dateRangePicker from '@/components/dateRangePicker'
import dateTimePicker from '@/components/dateTimePicker'
import dateTimeRangePicker from '@/components/dateTimeRangePicker'
import form from '@/components/form'
import inlineForm from '@/components/inlineForm'
import inlineBox from '@/components/inlineBox'
import input from '@/components/input'
import inputWithLabel from '@/components/inputWithLabel'
import radio from '@/components/radio'
import select from '@/components/select'
import upload from '@/components/upload'
import table from '@/components/table'
import log from '@/components/log/'
import cityButtonBar from '@/components/cityButtonBar/'
import filterModule from '@/components/filterModule/'
import dialogList from '@/components/dialogList/'

const CloneDeep = _.cloneDeep
const Merge = _.mergeWith
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
        },
        globalObj:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data: function () {
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
                inlineForm,
                inlineBox,
                input,
                inputWithLabel,
                radio,
                select,
                log,
                upload,
                table,
                cityButtonBar,
                filterModule,
                dialogList
            ]
        }
    },
    computed: {
        freezeConfig: function () {
            return CloneDeep(this.config);
        },
        freezeMapConfig: function () {
            return CloneDeep(this.mapConfig);
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
            var vuexSetting = CloneDeep(itemMapConfig.vuex);
            var extend = itemMapConfig.extend || {};
            var config = itemMapConfig.data || {};
            var options = {};
            if (vuexSetting) {
                let state = vuexSetting.state;
                let newState = {}
                if(state){
                    _.forEach(state,function (item,key) {
                        if(item.indexOf('.')!=='-1'){
                            newState[key] = function (state) {
                                return _.get(state, item);
                            }
                        }else{
                            newState[key] = item
                        }
                    })
                }
                options = {
                    computed: {
                        ...extend.computed,
                        ...mapState(newState),
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
            Merge(data, config)
            var result = component.extend(extend);
            return result;
        },
        createVnode: function (h, item) {
            var data = CloneDeep(item.data || {});
            var mapConfig = this.freezeMapConfig;
            var tag = item.tag;
            var definition = this.getComponent(tag);
            var engineThis = this;
            if(definition){
                let beforeCreate = function () {
                    this.$engine = {
                        globalObj: engineThis.globalObj
                    }
                }
                if(definition.mixin){
                    definition.mixin({
                        beforeCreate
                    })
                }else{
                    definition.mixin = [{
                        beforeCreate
                    }]
                }
            }else{
                definition = tag
            }

            var children = [];
            var result;
            if (data && data.props && data.props.ref) {
                var ref = data.props.ref;
                data.ref = ref;
                var itemMapConfig = mapConfig[ref];
                if (itemMapConfig) {
                    result = this.mergeOptionsByMapConfig(definition, data, itemMapConfig)
                }
            }
            if (item.children) {
                var cloneChildren = CloneDeep(item.children)
                cloneChildren.forEach((childItem, index) => {
                        if (typeof childItem === 'string') {
                            children.push(childItem);
                        }
                        let childNode = this.createVnode(h, childItem)
                        if (definition && definition.options) {
                            let options = definition.options
                            if (options.nest && options.nestRender) {
                                let nestedData = data.props.nestedData;
                                childNode = options.nestRender(h, childNode, nestedData[index])
                            }
                        }

                        children.push(childNode);
                    }
                )
            }
            if (result) {
                return h(result, data, children);
            }
            return h(definition, data, children);
        }
    },
    created(){
        this.$data.componentList.map((item, index) => {
            Vue.component(item.name, item);
        })
    },
    render: function (_h) {
        var wrapVnode = this.createVnode(
            _h, {
                tag: 'div',
                data: {},
                children: CloneDeep(this.freezeConfig.renderData)
            }
        );
        return wrapVnode
    },
    components: {

    }
}
