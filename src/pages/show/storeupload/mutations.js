import * as types from './mutation-types'
export default {

    [types.SET_ACTIVITY_CITYNAME](state, val) {
    	state.uploadForm.cityName = val;
    },
    [types.SET_ACTIVITY_CITYID](state, val) {
    	state.uploadForm.cityId = val;
    },
    [types.UPLOAD_PHONE_BEFORE](state, file) {
    	if(!state.uploadForm.cityId) {
    		alert('请先选择城市')
    		return false;
    	}
    	return true;
    },
    [types.UPLOAD_PHONE_SUCCESS](state, res) {
    	
    },
    [types.UPLOAD_PHONE_ERROR](state, error) {
    	
    }
}
