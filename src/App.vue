<script>
    import checkBox from './components/checkBox/setting'
    import datePicker from './components/datePicker/setting'
    import dateTimePicker from './components/dateTimePicker/setting'
    import dateRangePicker from './components/dateRangePicker/setting'
    import dateTimeRangePicker from './components/dateTimeRangePicker/setting'
    import Hello from './components/Hello/setting'
    import inputWithLabel from './components/inputWithLabel/setting'
    import pureButton from './components/pureButton/setting'
    import pureInput from './components/pureInput/setting'
    import radios from './components/radios/setting'
    import wmForm from './components/wmForm/setting'
    import wmTable from './components/wmTable/setting'
    import settingBridge from './components/settingBridge'
    import vue from 'vue'
    import draggable from 'vuedraggable'

    export default {
        name: 'App',
        components: {
            checkBox,
            datePicker,
            dateTimePicker,
            dateRangePicker,
            dateTimeRangePicker,
            Hello,
            inputWithLabel,
            pureButton,
            pureInput,
            radios,
            settingBridge,
            wmForm,
            wmTable,
            draggable
        },
        render: function (h) {
            return (
                    <div id="app">
                        <div class="box-card el-card componentWrap el-col-8">
                            <div class="el-card__header">
                                <div class="clearfix">
                                    <h2>组件列表</h2>
                                </div>
                            </div>
                            <draggable list={this.componentShowList}
                                       options={this.componentListSortableOption}
                                       clone={this.clone}
                                       class="dragArea">
                                {
                                    this.componentShowList.map(function (item) {
                                        return (
                                                <li>
                                                    <div id="mount"
                                                         class="el-menu-item">
                                                        {item}
                                                    </div>
                                                </li>
                                        )
                                    })
                                }
                            </draggable>
                        </div>
                        <div class="box-card el-card canvasWrap el-col-8">
                            <div class="el-card__header">
                                <div class="clearfix">
                                    <el-row>
                                        <el-col span={12}>
                                            <h2>页面画布</h2>
                                        </el-col>
                                        <el-col span={12}>
                                            <el-button type="primary"
                                                       onClick={this.getRenderConfig}>提交
                                            </el-button>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <draggable list={this.canvasComponentList}
                                       options={this.canvasSortableOption}
                                       class="canvasSortable">
                                {
                                    this.canvasComponentList.map((item,index) => {
                                        return (
                                                <div key={item.ref}
                                                     class="canvasItemWrap">
                                                    <div class="filter filterWrap">
                                                        <i class="el-icon-edit filter"
                                                           onClick={this.clickCanvasItem.bind(this,item)}></i>
                                                        <i class="el-icon-delete filter"
                                                           onClick={this.deleteCanvasItem.bind(this,this.canvasComponentList,index,item)}></i>
                                                    </div>
                                                    {
                                                        h(item.name, {
                                                            ref: item.ref
                                                        }, [this.getNestedInfo(item, h)])
                                                    }
                                                </div>
                                        )
                                    })
                                }
                            </draggable>
                        </div>
                        <div class="box-card el-card settingForm el-col-8">
                            <div class="el-card__header">
                                <div class="clearfix">
                                    <h2>组件设置</h2>
                                </div>
                            </div>
                            <setting-bridge ref="settingBridge"
                                            setting-data={this.settingData}
                                            onChangeItem={this.changeItemNestedData}
                                            setting-item={this.settingItem}
                                            instance={this.settingInstance}></setting-bridge>
                        </div>
                    </div>
            )
        },
        methods: {
            getNestedInfo: function (item, h) {
                var setting = this.$options.componentSetting[item.name];
                if (setting && setting.nest) {
                    if (!item.canvasComponentList) {
                        vue.set(item, 'canvasComponentList', []);
                    }
                    if (!item.nestedData) {
                        vue.set(item, 'nestedData', []);
                    }
                    if (!item.canvasSortableOption) {
                        item.canvasSortableOption = {
                            group: {
                                name: 'canvasSortableGroup2',
                                pull: false,
                                put: ['canvasSortableGroup']
                            },
                            draggable: ".canvasItemWrap",
                            animation: 150,
                            filter: '.filter',
                        };
                    }
                    return (
                            <draggable list={item.canvasComponentList}
                                       options={item.canvasSortableOption}
                                       class="canvasSortable1">
                                {
                                    item.canvasComponentList.map((nestedItem, index) => {
                                        return (
                                                <div key={nestedItem.ref}
                                                     class="canvasItemWrap">
                                                    <div class="filter filterWrap">
                                                        <i class="el-icon-edit filter" onClick={this.clickCanvasItem.bind(this,nestedItem)}></i>
                                                        <i class="el-icon-delete filter"
                                                           onClick={this.deleteCanvasItem.bind(this,item.canvasComponentList,index,nestedItem)}></i>
                                                    </div>
                                                    {setting.nest.render(h, h(nestedItem.name, {
                                                                ref: nestedItem.ref
                                                            }), item.nestedData[index]
                                                    )}
                                                </div>
                                        )
                                    })
                                }
                            </draggable>
                    );
                }
                return '';
            },
            getRenderConfig: function () {
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
                alert(JSON.stringify(result))
            },
            changeItemNestedData: function (nestedData) {
                this.settingItem.nestedData = nestedData
            },
            clone: function (origin) {
                return {
                    name: origin,
                    ref: new Date().getTime()
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
            },
            deleteCanvasItem: function (canvasComponentList,index,item) {
                canvasComponentList.splice(index,1)
                delete this.$refs[item.ref]
            }
        },
        data: function () {
            return {
                componentList: [
                    'checkBox',
                    'datePicker',
                    'dateTimePicker',
                    'dateRangePicker',
                    'dateTimeRangePicker',
                    'inputWithLabel',
                    'pureButton',
                    'pureInput',
                    'radios',
                    'wmForm',
                    'wmTable',
                ],
                settingData: {},
                settingId: 1,
                settingItem: {},
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
                var me = this;
                return this.componentList.map((item) => {
                    var componentConstruct = me.$options.components[item];
                    if (!componentConstruct) {
                        componentConstruct = vue.options.components[item];
                    }
                    var instance = new vue(componentConstruct);
                    me.$options.componentSetting[item] = componentConstruct.props.settingDefinition;
                    if (instance.$options.name) {
                        return instance.$options.name
                    }
                    return componentConstruct.options.name
                })
            }
        },
        mounted: function () {
            let campareData = [
                {
                    "name": "pureButton",
                    "ref": 1485087547134
                }, {
                    "name": "wmForm",
                    "ref": 1485087542773,
                    "canvasComponentList": [
                        {
                            "name": "pureInput",
                            "ref": 1485087544205
                        }
                    ],
                    "nestedData": [
                        {
                            "prop": "",
                            "label": "aa"
                        }
                    ],
                    "canvasSortableOption": {
                        "group": {
                            "name": "canvasSortableGroup2",
                            "pull": false,
                            "put": ["canvasSortableGroup"]
                        },
                        "draggable": ".canvasItemWrap",
                        "animation": 150,
                        "filter": ".filter"
                    }
                }
            ]
            let testData = [
                {
                    "tag": "Hello",
                    "data": {"props": {"msg": "好的算法的生活"}}
                }, {
                    "tag": "wmForm",
                    "data": {
                        "props": {
                            "nestedData": [
                                {
                                    "prop": "",
                                    "label": "默认稍等好啥地方"
                                }, {
                                    "label": "范德萨发啥",
                                    "prop": ""
                                }
                            ]
                        }
                    },
                    "children": [
                        {
                            "tag": "Hello",
                            "data": {}
                        }, {
                            "tag": "pureButton",
                            "data": {}
                        }
                    ]
                }
            ]

            let generateCanvasComponentListData = (item) => {
                let canvasComponentList = []
                let ref = new Date().getTime()
                let result = {
                    name: item.tag,
                    ref
                }
                if (item.children) {
                    canvasComponentList = item.children.map((item) => {
                        return generateCanvasComponentListData(item)
                    })
                    result.canvasComponentList = canvasComponentList
                    result.nestedData = item.data.props.nestedData
                    result.canvasSortableOption = {
                        "group": {
                            "name": "canvasSortableGroup2",
                            "pull": false,
                            "put": ["canvasSortableGroup"]
                        },
                        "draggable": ".canvasItemWrap",
                        "animation": 150,
                        "filter": ".filter"
                    }
                }
                return result

            }
            if (location.href.indexOf('edit') !== -1) {
                this.canvasComponentList = testData.map((item, index) => {
                    return generateCanvasComponentListData(item)
                })
            }
        },
        beforeCreate: function () {
            this.$options.componentSetting = {};
        }

    }
</script>
<style lang="less"
       rel="stylesheet/less">
    @import './styles/index.less';

    .fullHeight {
        height: 100%;
    }

    .fullWight {
        width: 100%;
    }

    html, body, #app {
        .fullHeight;
        .fullWight;
    }

    @componentWidth: 750px;
    #app {
        display: flex;
        .componentWrap {
            width: 280px;
            height: 100vh;
            font-family: 'microsoft yahei';

            .el-menu-item {
                font-size: 1.6rem;
                height: 2.66667rem;
                line-height: 2;
                font-family: 'helvetica';
            }
        }
        .canvasWrap {
            flex-grow: 1;
            .canvasSortable {
                .fullHeight;
                .canvasItemWrap {
                    position: relative;
                    .filterWrap {
                        position: absolute;
                        z-index: 100;
                        padding: 0 10px;
                        right: 10px;
                        border: 1px solid silver;
                    }
                }
            }
        }
        .settingForm {
            width: 900px;
            background-color: silver;
            #settingBridge {
                background-color: #eff2f7;
                height: 100vh;
            }
        }
    }

    .canvasSortable1 {
        min-height: 500px;
    }
</style>
