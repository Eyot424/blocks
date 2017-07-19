export default {
	renderData: [{
		"tag": "filterModule",
		"data": {
			"props": {
				"tableList": [{
					"prop": "`${data.id}`",
					"label": "活动ID",
					"url": ""
				}, {
					"label": "活动名称",
					"prop": "`${data.name}`",
					"url": ""
				}, {
					"label": "数据来源",
					"prop": "`${data.sources}`",
					"url": ""
				}, {
					"label": "活动城市",
					"prop": "`${data.city_id}`",
					"url": ""
				}, {
					"label": "发券时间",
					"prop": "`${data.coupon_date}`",
					"url": ""
				}, {
					"label": "注券成功用户数",
					"prop": "`${data.coupon_succ_num}`",
					"url": ""
				}, {
					"label": "注券失败用户数",
					"prop": "`${data.coupon_fail_num}`",
					"url": ""
				}, {
					"label": "活动发放状态",
					"prop": "`${data.status_name}`",
					"url": ""
				}, {
					"label": "创建人",
					"prop": "`${data.operator}`",
					"url": ""
				}],
				"buttonList": [{
					"type": 1,
					"url": "",
					"condition": ""
				}, {
					"type": 2,
					"url": "",
					"condition": ""
				}, {
					"type": 3,
					"url": "",
					"condition": ""
				}, {
					"type": 4,
					"url": "",
					"condition": ""
				}],
				"nestedData": [{
					"prop": "id",
					"label": "活动ID"
				}, {
					"label": "活动名称",
					"prop": "name"
				}, {
					"label": "操作人",
					"prop": "operator"
				}, {
					"label": "活动发放状态",
					"prop": "status"
				}, {
					"label": "活动城市",
					"prop": "city_id"
				}, {
					"label": "数据来源",
					"prop": "source"
				}],
				"url": "",
				"otherButtons": [{
					"label": "创建活动",
					"prop": "",
					"icon": "plus",
					"url": "/usercrm/mis/createtouchnewactivity"
				}],
				"ref": "activityList"
			}
		},
		"children": [{
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "id",
					"ref": "id"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "name",
					"ref": "name"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "operator",
					"ref": "operator"
				}
			}
		}, {
			"tag": "selects",
			"data": {
				"props": {
					"selectRef": "status",
					"ref": "status"
				}
			}
		}, {
			"tag": "citySelect",
			"data": {
				"props": {
					"inputRef": "city_id",
					"ref": "city_id"
				}
			}
		}, {
			"tag": "selects",
			"data": {
				"props": {
					"selectValue": "",
					"selectRef": "source",
					"ref": "source"
				}
			}
		}]
	}]
}
