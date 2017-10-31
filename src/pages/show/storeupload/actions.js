import * as types from './mutation-types'
import vuex from 'vuex'
export default {
    uploadPhone ({commit, state}) {
    	if(state.uploadForm.cityId) {
            return true;
        } else {
            return false;
        }
    }
}
