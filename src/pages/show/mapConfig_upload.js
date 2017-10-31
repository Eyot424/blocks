import store from './storeupload/'
export default {
    cityId: {
        vuex: {
            state: {
                inputValue: 'uploadForm.cityName'
            }
        },
        data: {
            props: {
                inputValueChange(value) {
                    store.commit('setActivityCityName',value)
                },
                selectValueChange(item) {
                    store.commit('setActivityCityId',item.id)
                }
            }
        }
    },
    phoneNumber: {
        vuex: {
            state: {
               uploadParam: 'uploadForm'
            }
        },
        data: {
            props: {
                beforeUploadFunc(file) {
                    return new Promise((resolve,reject) => {
                        store.dispatch('uploadPhone',file).then(function(res) {
                            if(res) {
                                resolve(true)
                            } else {
                                reject(false)
                            }
                        });
                    });
                },
                successFunc(res) {
                    store.commit('uploadPhoneSuccess',res);
                },
                errorFunc(error) {
                    store.commit('uploadPhoneSuccess',error);
                }
            }
        }
    }
}
