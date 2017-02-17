export default {
    created () {
        this.uuid = this.createUuid();
    },
    methods:{
        createUuid:function () {
            return 'uuid' + new Date().getTime().toString(36)
        }
    }
}
