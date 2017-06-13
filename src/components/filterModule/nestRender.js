export default function nestRender(h,component,item) {

    var label = item ? item.label : '默认'

    return (
        <el-form-item label={label} style="margin-bottom:0">
            {component}
        </el-form-item>
    )
}
