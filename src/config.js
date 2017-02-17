export default {
    renderData: [
        {
            tag: 'el-form',
            data: {
                staticClass: "demo-form-inline",
                attrs: {
                    "inline": true,
                }
            },
            children: [
                {
                    tag: 'el-form-item',
                    data: {},
                    children: [
                        {
                            tag: 'el-input',
                            data: {
                                attrs: {
                                    "placeholder": "审批人"
                                }
                            }
                        }
                    ]
                },
                {
                    tag: 'el-form-item',
                    data: {},
                    children: [
                        {
                            tag: 'el-select',
                            data: {
                                attrs: {
                                    "placeholder": "活动区域"
                                },
                            },
                            children: [
                                {
                                    tag: 'el-option',
                                    data: {
                                        attrs: {
                                            "label": "区域一",
                                            "value": "shanghai"
                                        }
                                    }
                                }, " ", {
                                    tag: 'el-option',
                                    data: {
                                        attrs: {
                                            "label": "区域二",
                                            "value": "beijing"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'el-form-item',
                    data: {},
                    children: [
                        {
                            tag: 'el-date-picker',
                            data: {
                                attrs: {
                                    type: "date",
                                    placeholder: "选择日期"
                                },
                            }
                        }
                    ]
                },
                {
                    tag: 'el-form-item',
                    data: {},
                    children: [
                        {
                            tag: 'el-switch',
                            data: {}
                        }
                    ]
                },
                {
                    tag: 'el-form-item',
                    data: {},
                    children: [
                        {
                            tag: 'el-button',
                            data: {
                                attrs: {
                                    "type": "primary"
                                },
                            },
                            children: ["查询"]
                        }
                    ]
                }
            ]
        },
        {
            tag: 'ElButton',
            data: {
                ref: 'button'
            },
            children: ['clear']
        },
        {
            tag: 'el-table',
            data: {
                ref: "table",
                staticStyle: {"width": "100%"}
            },
            children: [
                {
                    tag: 'el-table-column',
                    data: {
                        attrs: {
                            "prop": "date",
                            "label": "日期",
                            "width": "180"
                        }
                    }
                }, {
                    tag: 'el-table-column',
                    data: {
                        attrs: {
                            "prop": "name",
                            "label": "姓名",
                            "width": "180"
                        }
                    }
                }, {
                    tag: 'el-table-column',
                    data: {
                        attrs: {
                            "prop": "address",
                            "label": "地址"
                        }
                    }
                }
            ]
        }
    ]
}
