import { ADD_VACCINE, GENERAL_REQUEST, GET_OWNER, GET_PUPPY, GET_TEST, GET_VETERINARIAN, REGISTER_OWNER, REGISTER_PUPPY, REGISTER_VETERINARIAN } from '../type/contract'
import { ANIMAL, OWNER, VETERINARIAN } from '../../assets/resources/UserType'
import TestState from '../../interface/common/TestState'

const defaultState: TestState = {
    loading: false,
    veterinarian: null,
    owner: null,
    puppy: null,
    getter: null
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
                loading: false,
                veterinarian: action.data,
                getter: VETERINARIAN
            }
        case GET_OWNER:
            return {
                ...state,
                loading: false,
                owner: action.data,
                getter: OWNER
            }
        case GET_PUPPY:
            return {
                ...state,
                loading: false,
                puppy: action.data,
                getter: ANIMAL
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
        case ADD_VACCINE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}