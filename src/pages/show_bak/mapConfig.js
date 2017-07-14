import store from './store'
export default {
    log: {
        vuex: { //vuex.store
            state: {
                logData: 'logData',
                total: 'total',
                currentPage: 'currentPage'
            },
            getters: {},
            mutations: {

            },
            actions: {
                handleCurrentChange:'pageChange'
            }
        },
        extend: {},
        data: {
            props: {
                customFetch(){
                    let result = {
                        "data": {
                            "activity_id": 1980940,
                            "activity_name": "82年叫花鸡（金杨路店）- BANFF",
                            "curpage": 1,
                            "perpage": 20,
                            "total": 61,
                            "items": [
                                {
                                    "create_time": "2017-06-09 14:13:22",
                                    "create_user": "越城于敏中",
                                    "type": "(满减优惠)规则操作",
                                    "content": ["增加新规则"]
                                }
                            ]
                        },
                        "req_params": {
                            "__c": "mis",
                            "qt": "showactivitylog",
                            "type": "1",
                            "activity_id": "1980940",
                            "display": "json",
                            "10450716887902894806_1_wmauditpush": "f83b086809dcfd349c670a7a81aa5428-gaomin-1_1472802760_1_0",
                            "13469230457509463369_1_wmauditpush": "4dd6bb00643b77b0774da7ac13b52fae-xiaorenhui_1473665984_1_0",
                            "BIDUPSID": "DB8EDD3AED0B9575771BE7A9F1757BAA",
                            "PSTM": "1487084836",
                            "BAIDUID": "68EECD8507CD62EB2BA3206679416519:FG=1",
                            "Hm_lvt_e0401ea6bbde08becd704794fb788176": "1490879989",
                            "__cfduid": "d5e86acc7da5d2181d627b04bb44678a91491117429",
                            "wm_city": "{\"code\":131,\"name\":\"北京\"}",
                            "WMUUAP": "ALECAAAUMkU8BkgKOyg4JjVeGVQ9b0BNGiYZLjIRSk5GcCJaBVMgQFlnShUQAjpFEpE9iHAACvAQAAX1MZHUJZaVt-AwoxE1N-WEQgMkhzUQlNOVJhSVMcDjNuJ08wATkMfjsVME1oLyUsT1d0Qih8EGFOxAYAABoG-Q6HhhgN9lUqDJPvWBGdCAAAiahAkA",
                            "MCITY": "-:",
                            "pgv_pvi": "364168192",
                            "pgv_si": "s785649664",
                            "BDRCVFR": {"feWj1Vr5u3D": "mk3SLVN4HKm"},
                            "PSINO": "1",
                            "H_PS_PSSID": "1445_21084_17001_20928",
                            "XLYUSS": "WlVkc2FHSXpTbXhpYldneFlWWTVjR1F5Um5CaVYwWndURzFLYUdGWFVqRk1iVTUyWWxZNU0xbFhiSFJaVjJzOVFEUXpPVVJGTVVNMApRelJGTnpBeVJVUkdOVEJHTmtSQk1EYzNPVVEzTmtRNUxuZHZjbXRsY2pFPUAxNDk2OTg5MjQ4NzA0"
                        }
                    }
                    for(var i = 0;i<10;i++){
                        result.data.items.push({
                            "create_time": "2017-06-09 14:13:22",
                            "create_user": "越城于敏中",
                            "type": "(满减优惠)规则操作",
                            "content": ["增加新规则"]
                        })
                    }

                    store.commit('serverResult', result)
                }
            }
        }
    }
}
