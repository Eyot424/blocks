import store from './store'
export default {
    forms: {
        vuex: { //vuex.store
            state: {
                
            },
            getters: {},
            mutations: {

            },
            actions: {
                getDataSourceList: 'getDataSourceList'
            }
        },
        extend: {},
        data: {
            props: {
                getAllCheckData() {
                	let res = {    
					    "errno": 0,
					    "errmsg": "",
					    "data": {
					        0:"全部",
					        1:"百度竞品",
					        2:"注册未转化",
					        3:"领取红包未注册用户",
					        4:"线下BD提供手机号",
					        5:"激活未注册"
					    }
					};
					let allCheckData = [];
					if(res.errno === 0) {
						for(var item in res.data) {
							allCheckData.push({
	                            value: item,
	                            label: res.data[label],
	                            checked: false
                        	});
						}
					}
					store.commit('getDataSourceList', result)
                }
            }
        }
    }
}
