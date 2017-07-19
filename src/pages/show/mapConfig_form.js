import store from './store/'
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
        extend: {
            
        },
        data: {
            props: {

            }
        }
    },
    name: {
        vuex: {
            state: {
                inputValue: 'ruleForm.name'
            }
        },
        data: {
            props: {
                inputValueChange(value) {
                    store.commit('getActivityName',value)
                }
            }
        }
    },
    sources: {
    	vuex: { //vuex.store
            state: {
                allCheckData: 'allDataSourceData'
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
                getAllCheckData() {
                	let res = {    
					    "errno": 0,
					    "errmsg": "",
					    "data": {
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
                },
                changeValue(value) {
                   store.dispatch('getSelectedDataSource',value)
                }
            }
        }
    },
    cityIds: {
        vuex: {
            state: {

            }
        },
        extend: {},
        data: {
            props: {
                changeSelectedCityIds(cityIds) {
                    store.dispatch('getSelectedCityIds',cityIds)
                }
            }
        }
    },
    total: {
        vuex: {//vuex.store
            state: {
                inputValue: 'total'
            },
            getters: {

            },
            mutations: {

            }
        },
        extend: {},
        data: {
            props: {
                
            }
        }
    },
    department: {
    	vuex: { //vuex.store
            state: {
                allData: 'allDepartmentData'
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
					        "3": "运营中心",
					        "4": "产品中心",
					        "5": "研发中心",
					        "6": "客服中心",
					        "8": "市场中心",
					        "9": "人力资源中心",
					        "10": "城市预算",
					        "11": "KA餐饮",
					        "12": "KA药品",
					        "13": "KA商超",
					        "14": "KA生鲜",
					        "15": "生态链",
					        "16": "新业务创新中心",
					        "17": "app渠道投放",
					        "18": "品牌运营",
					        "19": "质享生活",
					        "20": "销售运营中心全国活动运营部",
					        "21": "城市KA"
					    },
					    "req_params": {
					        "userinfo": "null"
					    }
					}
					let result = [];
					if(res.errno === 0) {
						for(var item in res.data) {
							result.push({
	                            value: item,
	                            label: res.data[item]
                        	});
						}
					}
					store.commit('getDepartmentInfo', result)
                },
                changeOption(value) {
                    store.commit('getDepartmentValue', value)
                }
            }
        }
    },
    totalNum: {
        vuex: {

        },
        data: {
            props: {
               inputValueChange(value) {
                    store.commit('changeTotalNum',value);
               } 
            }
        }
    },
    couponDate: {
        data: {
            props: {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                changeDateTimeValue(value) {
                    store.commit('changeCouponDate',value);
                }
            }
        }
    },
    dispatchType: {
        vuex: {
            state: {

            }
        },
        data: {
            props: {
                changeRadioValue(value) {
                    store.commit('changeDisplayType',value)
                }
            }
        }
    },
    packageDialog: {
        vuex: {
            state: {
                dialogFormVisible: 'packageDialogShow'
            },
            getters: {},
            mutations: {
                
            },
            actions: {
                
            }
        }
    },
    pushPackages: {
        vuex: { //vuex.store
            state: {
                tableData: 'tableData'
            },
            getters: {},
            mutations: {
                
            },
            actions: {
                
            }
        },
        extend: {
            methods: {

            }
        },
        data: {
            props: {
                createHandle() {
                    store.commit('createPackageDialog')
                },
                editHandle(index, row, item) {
                    var param = {
                        index: index,
                        row: row,
                        item: item
                    }
                    store.commit('createPackageDialog', param);
                },
                deleteHandle(index) {
                    store.commit('deletePackage',index);
                }
            }
        }
    },
    isPushContent: {
        vuex: {

        },
        data: {
            props: {
                changeRadioValue(value) {
                    store.commit('changePushFlag',value)
                }
            }
        }
    },
    pushContent: {
        vuex: {
            state: {
                disabled: 'pushContentDisabled'
            }
        },
        data: {
            props: {
                inputValueChange(value) {
                    store.commit('setPushContent',value)
                }
            }
        }
    },
    pushTime: {
        vuex: {
            state: {
                dateTimeRangeVal: 'pushTime',
                disabled: ''
            },
            getters: {

            }
        },
        data: {
            props: {
                dateTimeRangeValue(value) {
                    store.commit('setPushTime',value)
                }
            }
        }
    },
    pushJumpTarget: {
        vuex: { //vuex.store
            state: {
                allData: 'allJumpPageData',
                disabled: 'pushJumpTargetDisabled'
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
                },
                changeOption(value) {
                    store.commit('setJumpTargetValue', value)
                }
            }
        }
    },
    pushLink: {
        vuex: {
            state: {
                disabled: 'pushLinkDisabled'
            },
            getters: {

            }
        },
        data: {
            props: {
                inputValueChange(value) {
                    store.commit('setPushLink',value)
                }
            }
        }
    },
    isSmsContent: {
        data: {
            props: {
                changeRadioValue(value) {
                    store.commit('changeSmsFlag',value)
                }
            }
        }
    },
    smsContent: {
         vuex: {
            state: {
                disabled: 'smsContentDisabled'
            },
            getters: {

            }
        },
        data: {
            props: {
                inputValueChange(value) {
                    store.commit('setSmsContent',value)
                }
            }
        }
    },
    smsTime: {
        vuex: {
            state: {
                dateTimeRangeVal: 'smsTime',
                disabled: 'smsTimeDisabled'
            },
            getters: {

            }
        },
        data: {
            props: {
               dateTimeRangeValue(value) {
                    store.commit('setSmsTime',value)
                } 
            }
        }
    },
    userNum: {
         vuex: {
            state: {
                disabled: 'userNumDisabled'
            },
            getters: {

            }
        },
        data: {
            props: {
                inputValueChange(value) {
                    store.commit('setUserNum',value)
                }
            }
        }
    }
}
