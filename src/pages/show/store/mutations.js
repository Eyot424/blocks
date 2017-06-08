import { set } from 'vue'
import * as types from './mutation-types'

export default {
    clear(state){
        state.tableData = [];
    }
}

