export default function nestRender(h,component,item) {
    var label = item ? item.label : '默认'
    var showItem = item && item.showItem ? item.showItem : true

    return (
        <el-form-item label={label} v-show={showItem}>
            {component}
        </el-form-item>
    )
}
