import {GET_TEST, GET_VETERINARIAN} from '../type/test'
import TestState from '../../interface/common/TestState'

const defaultState:TestState = {
    loading: false,
    veterinarian: null
}

export default(state = defaultState, action:any) => {
    switch(action.type) {
        case GET_TEST:
            return {
                ...state,
                test: action.test
            }

        case GET_VETERINARIAN:
            return {
                ...state,
                loading: true,
                veterinarian: action.data
            }

        default:
            return state
    }
}