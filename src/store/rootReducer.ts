import { combineReducers } from "redux";
import testReducer from './reducer/test';
import serviceWorkerReducer from './reducer/service-worker';
import authReducer from './reducer/auth'
import loadingReducer from './reducer/loading';

const appReducer = combineReducers({
    testReducer,
    serviceWorkerReducer,
    authReducer,
    loadingReducer
})

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}

export default rootReducer