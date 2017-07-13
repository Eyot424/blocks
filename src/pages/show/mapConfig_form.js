import store from './store'
export default {
    ruleForm: {
        vuex: { //vuex.store
            state: {
                
            },
            getters: {},
            mutations: {

            },
            actions: {
                
            }
        },
        extend: {},
        data: {
            props: {
                
            }
        }
    },
    sources: {
    	vuex: { //vuex.store
            state: {
                allCheckData: []
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
					let result = [];
					if(res.errno === 0) {
						for(var item in res.data) {
							result.push({
	                            value: item,
	                            label: res.data[item],
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
