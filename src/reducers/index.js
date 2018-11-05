import { combineReducers } from 'redux'
import {alert} from "./alert";
import {authentication} from "./user";

export default combineReducers({
    alert,
    authentication,
})