import { combineReducers } from "redux";
import productReducer from './productReducer';
import userReducer from './userReducer';
import accessReducer from './accessReducer';
import loadingReducer from './loadingReducer';

const reducer = combineReducers({
    productReducer,
    userReducer,
    accessReducer,
    loadingReducer
})

export default reducer