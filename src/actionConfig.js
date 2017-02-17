export default {
    renderData: [
        {
            tag: 'el-form',
            data: {
                staticClass: "demo-form-inline",
                attrs: {
                    'label-width': "100px"
                },
                style: {
                    width: '450px'
                }
            },
            children: [
                {
                    tag: 'el-form-item',
                    data: {
                        attrs: {
                            "label": "审批人:"
                        }
                    },
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
                    data: {
                        attrs: {
                            "label": "活动区域:"
                        }
                    },
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
                    data: {
                        attrs: {
                            "label": "选择日期:"
                        },
                    },
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
                    data: {
                        attrs: {
                            "label": "即时配送:"
                        },
                    },
                    children: [
                        {
                            tag: 'el-switch',
                            data: {}
                        }
                    ]
                },
                {
                    tag: 'el-form-item',
                    data: {
                        attrs: {
                            "label": "活动性质:"
                        },
                    },
                    children: [
                        {
                            tag: 'el-checkbox-group',
                            data: {},
                            children: [
                                {
                                    tag: 'el-checkbox',
                                    data: {
                                        label: "美食/餐厅线上活动",
                                        name: "type"
                                    },
                                    children:["线上活动"]
                                },
                                {
                                    tag: 'el-checkbox',
                                    data: {
                                        label: "美食/餐厅线上活动",
                                        name: "type"
                                    },
                                    children:["线下活动"]
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'el-form-item',
                    data: {
                        attrs: {
                            "label": "特殊资源:"
                        },
                    },
                    children: [
                        {
                            tag: 'el-radio-group',
                            data: {},
                            children: [
                                {
                                    tag: 'el-radio',
                                    data: {
                                        label: "美食/餐厅线上活动",
                                        name: "type"
                                    },
                                    children:["线上品牌商赞助"]
                                },
                                {
                                    tag: 'el-radio',
                                    data: {
                                        label: "美食/餐厅线上活动",
                                        name: "type"
                                    },
                                    children:["线下场地免费"]
                                }
                            ]
                        }
                    ]
                },
                {
                    tag: 'el-form-item',
                    data: {
                        attrs: {
                            "label": "活动形式:"
                        },
                    },
                    children: [
                        {
                            tag: 'el-input',
                            data: {
                                attrs: {
                                    "type": "textarea"
                                },
                            },
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
                            children: ["提交"]
                        },
                        {
                            tag: 'el-button',
                            data: {
                                attrs: {
                                },
                            },
                            children: ["重置"]
                        }
                    ]
                }
            ]
        }
    ]
}
