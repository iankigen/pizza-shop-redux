import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {alert} from "./alert";
import {authentication} from "./user";
import {category} from "./category";
import {pizza} from "./pizza";

export default combineReducers({
    alert,
    authentication,
    category,
    pizza,
    form: formReducer
})