import index from './index'
index.props['settingDefinition'] = {
    nest: {
        render: function (h, component, item) {
            return component
        }
    },
    setting: {},
    computed: {
        submitData: function () {
            return {}
        }
    },
    methods: {
        backFill: function (submitData) {
        }
    }
}
export default index
