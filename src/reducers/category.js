import { categoryConstants } from "../constants/category";

const initialState = {
    categories: [],
    loading: false,
};

export const category = (state=initialState, action) => {
    switch (action.type) {
        case categoryConstants.GET_CATEGORY:
            return {...state, ...action.payload};
        case categoryConstants.REQUEST_CATEGORY:
            return {...state, ...action.payload};
        case categoryConstants.ADD_CATEGORY:
            return {...state, ...action.payload};
        case categoryConstants.DELETE_CATEGORY:
            return {...state, ...action.payload};
        case categoryConstants.UPDATE_CATEGORY:
            return {...state, ...action.payload};
        default:
            return state
    }
};
