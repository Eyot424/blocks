import * as types from './mutation-types'
import vuex from 'vuex'
export default {
    submitForm ({commit}) {
    	// console.log(vuex.engine);
    	// var $ref = vuex.engine.$ref;
    	commit(types.GET_SUBMIT_DATA)
    },
    getSelectedDataSource({commit},value) {
    	commit(types.GET_SELECTED_DATA_SOURCES,value);
    },
    getSelectedCityIds({commit},value) {
    	commit(types.GET_SELECTED_CITY_IDS,value);
    },
    submitDialogForm({commit}) {
    	commit(types.GET_DIALOG_SUBMIT_DATA);
    }
}
