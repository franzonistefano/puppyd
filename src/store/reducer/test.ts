import { GENERAL_REQUEST, GET_OWNER, GET_PUPPY, GET_TEST, GET_VETERINARIAN, REGISTER_OWNER, REGISTER_PUPPY, REGISTER_VETERINARIAN } from '../type/test'
import TestState from '../../interface/common/TestState'

const defaultState: TestState = {
    loading: false,
    veterinarian: null,
    owner: null,
    puppy: null
}

export default (state = defaultState, action: any) => {
    switch (action.type) {
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
        case GET_OWNER:
            return {
                ...state,
                loading: true,
                owner: action.data
            }
        case GET_PUPPY:
            return {
                ...state,
                loading: true,
                puppy: action.data
            }
        case GENERAL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_VETERINARIAN:
            return {
                ...state,
                loading: false,
            }
        case REGISTER_PUPPY:
            return {
                ...state,
                loading: false,
            }
        case REGISTER_OWNER:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}