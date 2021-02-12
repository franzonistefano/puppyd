import { combineReducers } from "redux";
import contractReducer from './reducer/contract';
import toastReducer from './reducer/toast';
import serviceWorkerReducer from './reducer/service-worker';
import authReducer from './reducer/auth'
import loadingReducer from './reducer/loading';

const appReducer = combineReducers({
    contractReducer,
    serviceWorkerReducer,
    authReducer,
    loadingReducer,
    toastReducer
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer