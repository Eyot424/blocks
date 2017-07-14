export default {
	renderData: [{
		"tag": "forms",
		"data": {
			"props": {
				"nestedData": [{
					"prop": "name",
					"label": "活动名称"
				}, {
					"label": "数据来源",
					"prop": "sources"
				}, {
					"label": "活动城市",
					"prop": "city_ids"
				}, {
					"label": "使用部门",
					"prop": "department"
				}, {
					"label": "人数",
					"prop": "total_num"
				}, {
					"label": "发券时间",
					"prop": "coupon_date"
				}, {
					"label": "每个文案包发放人数",
					"prop": "each_type"
				},{
					"label": "文案包ID集合",
					"prop": "push_packages"
				}],
				"ref": "ruleForm"
			}
		},
		"children": [{
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "活动名称，最多15个字",
					"inputRef": "name",
					"ref": "name"
				}
			}
		}, {
			"tag": "checkBox",
			"data": {
				"props": {
					"allCheckData": [],
					"checkList": [],
					"ref": "sources"
				}
			}
		}, {
			"tag": "cityButtonBar",
			"data": {
				"props": {
					"ref": "city_ids"
				}
			}
		}, {
			"tag": "selects",
			"data": {
				"props": {
					"allData": [{
						"label": "请选择",
						"value": ""
					}],
					"checkList": [],
					"detail": "注意：使用部门是预算统计的重要依据,请认真选择",
					"ref": "department"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"ref": "total_num"
				}
			}
		}, {
			"tag": "datePicker",
			"data": {
				"props": {
					"dateFormat": "",
					"placeholder": "发券时间",
					"detail": "时间必须选择今天之后",
					"ref": "coupon_date"
				}
			}
		}, {
			"tag": "radio",
			"data": {
				"props": {
					"allRadioData": [{
						"label": "随机分配",
						"value": "1"
					}, {
						"label": "自定义",
						"value": "2"
					}],
					"radioRef": "each_type",
					"ref": "each_type"
				}
			}
		}, {
			"tag": "filterModule",
			"data": {
				"props": {
					"tableList": [{
						"prop": "id",
						"label": "文案包编号",
						"url": ""
					}, {
						"label": "短信文案",
						"prop": "sms",
						"url": ""
					}, {
						"label": "短信发放时间",
						"prop": "sms_start_time",
						"url": ""
					}, {
						"label": "push文案",
						"prop": "push",
						"url": ""
					}, {
						"label": "push发放时间",
						"prop": "push_start_time",
						"url": ""
					}, {
						"label": "触达人数",
						"prop": "num",
						"url": ""
					}, {
						"label": "操作",
						"prop": "",
						"url": ""
					}],
					"buttonList": [{
						"type": 2,
						"url": "",
						"condition": ""
					}, {
						"type": 5,
						"url": "",
						"condition": ""
					}],
					"nestedData": [{
						"prop": "",
						"label": "默认"
					}],
					"url": "",
					"otherButtons": [{
						"label": "创建文案包",
						"prop": ""
					}],
					"ref": "push_packages"
				}
			},
			"children": []
		}]
	}]
}