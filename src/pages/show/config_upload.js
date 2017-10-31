export default {
	renderData: [{
		"tag": "forms",
		"data": {
			"props": {
				"nestedData": [{
					"prop": "cityId",
					"label": "选择城市"
				}, {
					"label": "策反手机号",
					"prop": "phoneNumber"
				}],
				"showBtn": false,
				"ref": "uploadForm"
			}
		},
		"children": [{
			"tag": "citySelect",
            "data": {
                "props": {
                    "ref": "cityId"
                }
            }
		}, {
			"tag": "upload",
			"data": {
				"props": {
					"url": "/usercrm/mis/uploadtouchnewphonenumber",
					"name": "file_name",
					"multiple": false,
					"listType": "",
					"detail": "请上传格式txt、csv，最大256MB，文件上传后需校验",
					"access": "txt,csv",
					"showFileList": false,
					"ref": "phoneNumber"
				}
			}
		}]
	}]
}