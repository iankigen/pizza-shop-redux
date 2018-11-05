import { userConstants } from "../constants/user";
import { userService } from '../api/user'
import { HOME, LOGIN } from "../constants/url-list";

const login = (data, history) => {

    const request = user => ({type: userConstants.LOGIN_REQUEST, payload: {user, loading: true}});
    return async dispatch => {
        userService.logout();
        dispatch(request({email: data.email}));
        await userService.login(data).then(user => {
            localStorage.setItem('user', JSON.stringify(user.data));
            dispatch({type: userConstants.LOGIN_SUCCESS, payload: {user: user.data, loading: false, loggedIn: true}});
            history.push(HOME)
        }, error => {
            dispatch({type: userConstants.LOGIN_FAILURE, payload: {loading: false}})
        })
    }
};

const register = (data, history) => {
    const request = user => ({type: userConstants.SIGNUP_REQUEST, payload: {user, loading: true}});
    return async dispatch => {
        dispatch(request({email: data.email}));
        await userService.register(data).then(user => {
            localStorage.setItem('user', JSON.stringify(user.data));
            dispatch({type: userConstants.SIGNUP_SUCCESS, payload: {user: user.data, loading: false}});
            history.push(LOGIN)
        }, error => {
            dispatch({type: userConstants.SIGNUP_FAILURE, payload: {loading: false}})
        })
    }
};


const logout = (history) => {
    return dispatch => {
        dispatch({type: userConstants.LOGOUT, payload: {}});
        userService.logout();
        history.push(HOME)
    }
};

export const userActions = { login, logout, register };
