<script>
    import Vue from 'vue'
    import draggable from 'vuedraggable'
    import Url from 'url'

    import handler from './handler/index'
    import {testData} from './mock/'

    import breadCrumb from '@/components/breadCrumb/setting'
    import buttons from '@/components/button/setting'
    import checkBox from '@/components/checkBox/setting'
    import citySelect from '@/components/citySelect/setting'
    import datePicker from '@/components/datePicker/setting'
    import dateRangePicker from '@/components/dateRangePicker/setting'
    import dateTimePicker from '@/components/dateTimePicker/setting'
    import dateTimeRangePicker from '@/components/dateTimeRangePicker/setting'
    import filterModule from '@/components/filterModule/setting'
    import forms from '@/components/form/setting'
    import inlineForm from '@/components/inlineForm/setting'
    import inputs from '@/components/input/setting'
    import inputWithLabel from '@/components/inputWithLabel/setting'
    import radio from '@/components/radio/setting'
    import selects from '@/components/select/setting'
    import log from '@/components/log/setting'
    import settingBridge from '@/components/settingBridge'
    import tables from '@/components/table/setting'
    import upload from '@/components/upload/setting'

    const generateCanvasComponentListData = handler.generateCanvasComponentListData
    const ComponentSetting = {}
    const ComponentOptions = {}
    const UrlObjQuery = Url.parse(location.href, true).query

    export default {
        name: 'App',
        components: {
            breadCrumb,
            buttons,
            checkBox,
            citySelect,
            datePicker,
            dateRangePicker,
            dateTimePicker,
            dateTimeRangePicker,
            filterModule,
            forms,
            inputs,
            inputWithLabel,
            radio,
            selects,
            settingBridge,
            upload,
            log,
            draggable
        },
        render: function (h) {
            return (
                    <div id="app">
                        <el-tabs type="border-card"
                                 class="el-col-6">
                            <el-tab-pane label="组件列表">
                                <draggable list={this.componentShowList}
                                           options={this.componentListSortableOption}
                                           clone={this.clone}
                                           class="dragArea">
                                    {
                                        this.componentShowList.map(function (item) {
                                            return (
                                                    <el-button id="mount"
                                                               class="button-new-tag">{item}</el-button>
                                            )
                                        })
                                    }
                                </draggable>
                            </el-tab-pane>
                        </el-tabs>
                        <el-tabs type="border-card"
                                 class="el-col-18 canvasWrap">
                            <el-tab-pane label="页面画布">
                                <div class="canvas-button">
                                    <el-button class="submit-alldata"
                                               type="primary"
                                               onClick={this.getRenderConfig}>提交
                                    </el-button>
                                    <el-button class="submit-alldata"
                                               type="primary"
                                               onClick={this.downloadConfig}>下载
                                    </el-button>
                                </div>
                                {this.getDraggableList(h, this.canvasComponentList)}
                            </el-tab-pane>
                        </el-tabs>
                        <div class={{
                            show: (this.settingFormShow),
                            'box-card': true,
                            'el-card': true,
                            settingForm: true,
                            'el-col-8': true
                        }}>
                            <div class="el-card__header m-header">
                                <div class="clearfix">
                                    <h4>组件设置</h4>
                                </div>
                                <div onClick={this.settingFormHide}
                                     class="close-wrap">
                                    <i class="el-icon-close"></i>
                                </div>
                            </div>
                            <setting-bridge ref="settingBridge"
                                            setting-data={this.settingData}
                                            onChangeItem={this.changeItemNestedData}
                                            setting-item={this.settingItem}
                                            instance={this.settingInstance}></setting-bridge>
                        </div>
                        <div onClick={this.settingFormHide}
                             class={{
                                 'setting-form-background': true,
                                 'show': this.settingFormShow
                             }}></div>
                    </div>
            )
        },
        methods: {
            // download
            downloadConfig(){
                window.open(`/getJsonFile?config=${JSON.stringify(this.generateRenderConfig())}`)
            },
            getRenderConfig: function () {
                alert(JSON.stringify(this.generateRenderConfig()))
            },
            generateRenderConfig(){
                let getRenderResult = (canvasComponentList) => {
                    return canvasComponentList.map((item) => {
                        let instance = this.$refs[item.ref]
                        let renderVnode = {
                            tag: item.name,
                            data: {
                                props: instance.submitData
                            }
                        }
                        if (item.canvasComponentList) {
                            renderVnode.children = getRenderResult(item.canvasComponentList)
                        }
                        return renderVnode
                    })
                }
                let result = getRenderResult(this.canvasComponentList)
                return result
            },

            //render helper
            getDraggableList(h, list, nestingItem){
                return (
                        <draggable list={list}
                                   options={this.canvasSortableOption}
                                   class="canvasSortable">
                            {
                                list.map((item, index) => {
                                    let componentsOption = ComponentOptions[item.name]
                                    let itemNest = componentsOption ? componentsOption.nest : false
                                    if (itemNest) {
                                        if (!item.canvasComponentList) {
                                            Vue.set(item, 'canvasComponentList', []);
                                        }
                                        if (!item.nestedData) {
                                            Vue.set(item, 'nestedData', []);
                                        }
                                    }
                                    return (
                                            <div key={item.ref}
                                                 class="canvasItemWrap">
                                                <div class="filter filterWrap">
                                                    <i class="el-icon-edit filter"
                                                       onClick={this.clickCanvasItem.bind(this, item)}></i>
                                                    <i class="el-icon-delete filter"
                                                       onClick={this.deleteCanvasItem.bind(this,
                                                               list,
                                                               index,
                                                               item)}></i>
                                                </div>
                                                {
                                                    (() => {
                                                        if (nestingItem) {
                                                            let nestingOption = ComponentOptions[nestingItem.name]
                                                            if (!itemNest) {
                                                                return nestingOption.nestRender(h, h(item.name, {
                                                                            ref: item.ref,
                                                                            props: item.submitData
                                                                        }), nestingItem.nestedData[index]
                                                                )
                                                            } else {
                                                                return nestingOption.nestRender(h, h(item.name, {
                                                                            ref: item.ref,
                                                                            props: item.submitData
                                                                        }, [
                                                                            this.getDraggableList(h, item.canvasComponentList,
                                                                                    item)
                                                                        ]), nestingItem.nestedData[index]
                                                                )
                                                            }
                                                        } else {
                                                            if (!itemNest) {
                                                                return h(item.name, {
                                                                    ref: item.ref,
                                                                    props: item.submitData
                                                                })
                                                            } else {
                                                                return h(item.name, {
                                                                    ref: item.ref,
                                                                    props: item.submitData
                                                                }, [
                                                                    this.getDraggableList(h, item.canvasComponentList,
                                                                            item)
                                                                ])
                                                            }
                                                        }
                                                    })()}
                                            </div>
                                    )
                                })
                            }
                        </draggable>
                )
            },

            // item react function
            changeItemNestedData: function (data) {
                Vue.set(this.settingItem, 'submitData', data)
//                this.settingItem.submitData = data;
                if (data.nestedData) {
//                    this.settingItem.nestedData = data.nestedData;
                    Vue.set(this.settingItem, 'nestedData', data.nestedData)
                }
            },

            // setting react function
            settingFormHide(){
                this.settingFormShow = false
            },

            // canvas react function
            clone: function (origin) {
                return {
                    name: origin,
                    ref: new Date().getTime(),
                    submitData: {}
                }
            },
            clickCanvasItem: function (item) {
                var instance = this.$refs[item.ref]
                if (Array.isArray(instance)) {
                    instance = instance[0]
                }
                var setting = instance.$options.props.settingDefinition
                setting.id = ++this.settingId
                this.settingData = setting
                this.settingItem = item
                this.settingInstance = instance
                this.settingFormShow = true
            },
            deleteCanvasItem: function (canvasComponentList, index, item) {
                canvasComponentList.splice(index, 1)
                delete this.$refs[item.ref]
            }
        },
        data: function () {
            return {
                componentList: [
                    'breadCrumb',
                    'buttons',
                    'checkBox',
                    'citySelect',
                    'datePicker',
                    'dateRangePicker',
                    'dateTimePicker',
                    'dateTimeRangePicker',
                    'filterModule',
                    'forms',
                    'inputs',
                    'inputWithLabel',
                    'radio',
                    'log',
                    'selects',
                    'upload',
                ],
                settingData: {},
                settingId: 1,
                settingItem: {},
                settingFormShow: false,
                settingInstance: {},
                canvasComponentList: [],
                componentListSortableOption: {
                    group: {
                        name: 'canvasSortableGroup',
                        pull: 'clone',
                        put: false
                    },
                    sort: false,
                    animation: 150
                },
                canvasSortableOption: {
                    group: {
                        name: 'canvasSortableGroup1',
                        pull: false,
                        put: ['canvasSortableGroup']
                    },
                    draggable: ".canvasItemWrap",
                    animation: 150,
                    filter: '.filter',
                }
            }
        },
        computed: {
            componentShowList: function () {
                const me = this;
                return this.componentList.map((item) => {
                    let componentConstruct = me.$options.components[item];
                    if (!componentConstruct) {
                        componentConstruct = Vue.options.components[item];
                    }
                    let instance = new Vue(componentConstruct);
                    ComponentSetting[item] = componentConstruct.props.settingDefinition;
                    ComponentOptions[item] = componentConstruct;

                    if (instance.$options.name) {
                        return instance.$options.name
                    }
                    return componentConstruct.options.name;
                })
            }
        },
        mounted: function () {
            if (UrlObjQuery.edit) {
                if (UrlObjQuery.component) {
                    this.canvasComponentList = [{tag: UrlObjQuery.component}].map((item, index) => {
                        return generateCanvasComponentListData(item)
                    })
                } else {
                    this.canvasComponentList = testData.map((item, index) => {
                        return generateCanvasComponentListData(item)
                    })
                }
            }
        }
    }
</script>
<style lang="less"
       rel="stylesheet/less">
    @import '~@/styles/index.less';

    .fullHeight {
        height: 100%;
    }

    .fullWight {
        width: 100%;
    }

    html, body, #app {
        .fullWight;
        .fullHeight;
    }


    @componentWidth: 750px;
    #app {
        display: flex;

        .button-new-tag {
            margin: 10px 0 0 10px;

        }

        .canvasWrap {
            flex-grow: 1;
            background-color: #f2f4f8;
            .fullHeight;
            .canvas-button {
                margin-bottom: 20px;
            }

            .canvasSortable {
                .fullHeight;
                .fullWight;
                padding-bottom: 100px;

                .el-form--inline {

                    .canvasItemWrap, .canvasSortable {
                        width: auto;
                        height: auto;
                        min-height: auto;
                        display: inline-block;
                    }
                }

                .canvasItemWrap {
                    position: relative;
                    min-width: 200px;
                    padding-left: 90px;

                    .filterWrap {
                        position: absolute;
                        z-index: 100;
                        padding: 0 10px;
                        left: 0;
                        top: 0;
                        box-shadow: 5px 4px 11px #888888;
                        background-color: #fff;

                        .el-icon-delete {
                            margin-left: 20px;
                        }
                    }
                }
            }
        }
        .setting-form-background {
            position: fixed;
            .fullWight;
            .fullHeight;
            z-index: 300;
            display: none;
            opacity: 0;
            &.show {
                display: block;
            }
            background-color: silver;
        }
        .settingForm {
            width: 600px;
            position: fixed;
            right: -604px;
            z-index: 500;
            transition: all .5s;
            &.show {
                right: 0px;
            }
            .m-header {
                .close-wrap {
                    height: 36px;
                    width: 36px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .flex-center;
                justify-content: space-between;
            }
            box-shadow: -4px 0px 13px #888888;
            background-color: silver;
            #settingBridge {
                background-color: #eff2f7;
                height: 100vh;
            }
        }
    }

    .m-header {
        padding-top: 4px;
        padding-bottom: 4px;
    }

    .flex-center {
        display: flex;
        align-items: center;
    }

    .canvasSortable1 {
        min-height: 500px;
    }
</style>
