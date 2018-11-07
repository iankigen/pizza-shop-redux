import { categoryConstants } from '../constants/category';
import {categoryService} from "../api/category";
import { ADMIN_DASHBOARD } from "../constants/url-list";

const startRequest = (dispatch) => dispatch({type: categoryConstants.REQUEST_CATEGORY, payload: {loading: true}});
const finishRequest = (dispatch) => dispatch({type: categoryConstants.REQUEST_CATEGORY, payload: {loading: false}});

const addCategory = (data, history) => {
    return async dispatch => {
        startRequest(dispatch);
        await categoryService.addCategory(data).then(categories => {
            dispatch({type: categoryConstants.ADD_CATEGORY, payload: {categories: categories.data}});
            finishRequest(dispatch);
            history.push(ADMIN_DASHBOARD)
        }, error => {
            finishRequest(dispatch);
            console.log('error', error)
        })
    }
};

const getCategory = (id=null, history=null) => {
    return async dispatch => {
        startRequest(dispatch);
        await categoryService.getCategory(id).then(categories => {
            dispatch({type: categoryConstants.GET_CATEGORY, payload: {categories: categories.data}});
            finishRequest(dispatch);
            history && history.push(ADMIN_DASHBOARD)
        }, error => {
            finishRequest(dispatch);
            console.log('error', error)
        })
    }
};

export const categoryActions = {
    addCategory, getCategory
};