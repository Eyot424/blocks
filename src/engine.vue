<script>
    import Vue from 'vue';
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    import _ from 'lodash'
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
        data(){
            return {}
        },
        computed: {
            freezeConfig: function () {
                return _.cloneDeep(this.config);
            },
            freezeMapConfig: function () {
                return _.cloneDeep(this.mapConfig);
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
                var vuexSetting = _.cloneDeep(itemMapConfig.vuex);
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
                var data = _.cloneDeep(item.data || {});
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
                    var cloneChildren = _.cloneDeep(item.children)
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
            var wrapVnode = this.createVnode(
                    _h, {
                        tag: 'div',
                        data: {},
                        children: _.cloneDeep(this.freezeConfig.renderData)
                    }
            );
            return wrapVnode

        },
        components: {}
    }
</script>
