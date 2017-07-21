export default {
	renderData: [
	{
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
				},{
					"label": "总人数",
					"prop": "total"
				}, {
					"label": "人数",
					"prop": "total_num"
				}, {
					"label": "发券时间",
					"prop": "coupon_date"
				}, {
					"label": "每个文案包发放人数",
					"prop": "dispatch_type"
				},{
					"label": "",
					"prop": ""
				}],
				"ref": "ruleForm",
				"labelWidth": "150px"
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
					"checkRef": "sources",
					"ref": "sources"
				}
			}
		}, {
			"tag": "cityButtonBar",
			"data": {
				"props": {
					"ref": "cityIds"
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
					"selectRef": "department",
					"selectValue": "",
					"ref": "department"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "total",
					"ref": "total",
					"disabled": true
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "totalNum",
					"ref": "totalNum"
				}
			}
		}, {
			"tag": "dateTimePicker",
			"data": {
				"props": {
					"dateFormat": "",
					"placeholder": "发券时间",
					"detail": "时间必须选择今天之后",
					"dateTimeRef": "couponDate",
					"ref": "couponDate"
				}
			}
		}, {
			"tag": "radio",
			"data": {
				"props": {
					"allRadioData": [{
						"label": "随机分配",
						"value": "2"
					}, {
						"label": "自定义",
						"value": "1"
					}],
					"radioRef": "dispatchType",
					"ref": "dispatchType"
				}
			}
		},{
			"tag": "tables",
			"data": {
				"props": {
					"tableList": [{
						"prop": "`${data.id}`",
						"label": "文案包编号",
						"url": ""
					}, {
						"label": "短信文案",
						"prop": "`${data.sms_content}`",
						"url": ""
					}, {
						"label": "短信发放时间",
						"prop": "`${data.sms_start_time}-${data.sms_end_time}`",
						"url": ""
					}, {
						"label": "push文案",
						"prop": "`${data.push_content}`",
						"url": ""
					}, {
						"label": "push发放时间",
						"prop": "`${data.push_start_time}-${data.push_end_time}`",
						"url": ""
					}, {
						"label": "触达人数",
						"prop": "`${data.user_num}`",
						"url": ""
					}],
					"buttonList": [{
						"type": 2,
						"url": "",
						"condition": "",
						"icon": "edit"
					}, {
						"type": 5,
						"url": "",
						"condition": "",
						"icon": "delete"
					}],
					"otherButtons": [{
						"label": "创建文案包",
						"prop": "",
						"icon": "plus",
						"url": ""
					}],
					"ref": "pushPackages"
				}
			},
			"children": []
		}]
	},
	{
		"tag": "dialogList",
		"data": {
			"props": {
				"nestedData": [{
					"prop": "isPushContent",
					"label": "是否推送消息"
				}, {
					"label": "推送文案",
					"prop": "pushContent"
				}, {
					"label": "跳转页面",
					"prop": "pushJumpTarget"
				}, {
					"label": "跳转页面链接",
					"prop": "pushLink"
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
					"prop": "user_num",
					"showItem": false
				}],
				"ref": "packageDialog",
				"labelWidth": "135px"
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
					"radioRef": "isPushContent",
					"ref": "isPushContent"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "推送文案，最多50个字",
					"inputType": "textarea",
					"inputRef": "pushContent",
					"ref": "pushContent",
					"detail":"注：文案中代金券金额和门槛由策略返回，通配符[1]代表代金券金额，[2]代金券门槛，由策略返回。例如：满[2]减[1]",
					"detailColor":"red"
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
					"selectRef": "pushJumpTarget",
					"ref": "pushJumpTarget"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "pushLink",
					"ref": "pushLink"
				}
			}
		}, {
			"tag": "dateTimeRangePicker",
			"data": {
				"props": {
					"dateRangeFormat":"",
					"placeholder":"选择日期",
					"detail":"时间间隔不能超过一天",
					"ref":"pushTime"
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
					"inputType": "textarea",
					"inputRef": "smsContent",
					"ref": "smsContent"
				}
			}
		}, {
			"tag": "dateTimeRangePicker",
			"data": {
				"props": {
					"dateRangeFormat":"",
					"placeholder":"选择日期",
					"detail":"时间间隔不能超过一天",
					"ref":"smsTime"
				}
			}
		}, {
			"tag": "inputs",
			"data": {
				"props": {
					"inputIcon": "",
					"placeholder": "",
					"inputRef": "userNum",
					"ref": "userNum"
				}
			}
		}]
	}]
}
