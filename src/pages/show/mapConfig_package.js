import store from './store'
export default {
    packageForm: {
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
    push_jump_page: {
    	vuex: { //vuex.store
            state: {
                allData: 'allJumpPageData'
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
                getAllData() {
                	let res = {    
                        "errno": 0,
                        "errmsg": "",
                        "data": {
                            "bdwm://native?pageName=home": "首页",
                            "bdwm://native?pageName=coupon": "我的代金券",
                            "bdwm://native?pageName=webview&url=http://waimai.baidu.com/static/pinzhi2/index.html&header=1": "质享生活",
                            "bdwm://native?pageName=userCenter": "我的",
                            "bdwm": "bdwm链接"
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
					store.commit('getJumpTargetList', result)
                }
            }
        }
    }

}
