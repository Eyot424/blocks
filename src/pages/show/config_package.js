export default {
	renderData: [{
		"tag": "dialogList",
		"data": {
			"props": {
				"nestedData": [{
					"prop": "",
					"label": "是否推送消息"
				}, {
					"label": "推送文案",
					"prop": "push_content"
				}, {
					"label": "跳转页面",
					"prop": "push_jump_page"
				}, {
					"label": "跳转页面链接",
					"prop": "push_jump_target"
				}, {
					"label": "发送时间",
					"prop": "push_start_time"
				}, {
					"label": "是否发送短信通知",
					"prop": ""
				}, {
					"label": "发送文案",
					"prop": "sms_content"
				}, {
					"label": "发送时间",
					"prop": "push_end_time"
				}, {
					"label": "发放人数",
					"prop": "user_num"
				}],
				"ref": "packageForm"
			}
		},
		"children": [{
			"tag": "radio",
			"data": {
				"props": {
					"allRadioData": [{
						"label": "是",
						"value": "1"
					}, {
						"label": "否",
						"value": "2"
					}],
					"radioRef": "",
					"ref": "isPushContent"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "推送文案，最多50个字",
					"inputRef": "push_content",
					"ref": "push_content"
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
					"detail": "",
					"ref": "push_jump_page"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "push_jump_target",
					"ref": "push_jump_target"
				}
			}
		}, {
			"tag": "dateRangePicker",
			"data": {
				"props": {
					"dateRangeFormat":"",
					"placeholder":"选择日期",
					"detail":"时间间隔不能超过一天",
					"ref":"push_time"
				}
			}
		}, {
			"tag": "radio",
			"data": {
				"props": {
					"allRadioData": [{
						"label": "是",
						"value": "1"
					}, {
						"label": "否",
						"value": "2"
					}],
					"radioRef": "",
					"ref": "isSmsContent"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "短信文案，最多50个字",
					"inputRef": "sms_content",
					"ref": "sms_content"
				}
			}
		}, {
			"tag": "dateRangePicker",
			"data": {
				"props": {
					"dateRangeFormat":"",
					"placeholder":"选择日期",
					"detail":"时间间隔不能超过一天",
					"ref":"sms_time"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "user_num",
					"ref": "user_num"
				}
			}
		}]
	}]
}