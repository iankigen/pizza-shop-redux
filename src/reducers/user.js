import { userConstants } from "../constants/user";

const user = JSON.parse(localStorage.getItem('user'));
const loggedIn = Boolean(user);

const initialState = {
    loggedIn: loggedIn,
    loading: false,
};

export const authentication = (state=initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {...state, ...action.payload};
        case userConstants.SIGNUP_REQUEST:
            return {...state, ...action.payload};
        case userConstants.LOGIN_SUCCESS:
            return {...state, ...action.payload};
        case userConstants.SIGNUP_SUCCESS:
            return {...state, ...action.payload};
        case userConstants.LOGIN_FAILURE:
            return {...state, ...action.payload};
        case userConstants.SIGNUP_FAILURE:
            return {...state, ...action.payload};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
};