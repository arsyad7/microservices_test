import { combineReducers } from "redux";
import productReducer from './productReducer';
import userReducer from './userReducer';
import accessReducer from './accessReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const reducer = combineReducers({
    productReducer,
    userReducer,
    accessReducer,
    loadingReducer,
    errorReducer
})

export default reducer