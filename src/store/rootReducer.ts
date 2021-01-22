import { combineReducers } from "redux";
import testReducer from './reducer/test';
import toastReducer from './reducer/toast';
import serviceWorkerReducer from './reducer/service-worker';
import authReducer from './reducer/auth'
import loadingReducer from './reducer/loading';

const appReducer = combineReducers({
    testReducer,
    serviceWorkerReducer,
    authReducer,
    loadingReducer,
    toastReducer
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer