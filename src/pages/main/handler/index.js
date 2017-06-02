
export default {
    generateCanvasComponentListData:(item) => {
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
}