export default {
    campareData: [
        {
            "name": "buttons",
            "ref": 1485087547134
        }, {
            "name": "form",
            "ref": 1485087542773,
            "canvasComponentList": [
                {
                    "name": "inputs",
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
    ],
    testData: [
        {
            "tag": "Hello",
            "data": {"props": {"msg": "好的算法的生活"}}
        }, {
            "tag": "form",
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
                    "tag": "buttons",
                    "data": {}
                }
            ]
        }
    ]
}
