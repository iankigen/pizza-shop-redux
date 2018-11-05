import axios from './axios';

const login = (data) => {
    return axios({
        method:'post',
        url:'/user/sign_in',
        data
    })
};

const register = (data) => {
    return axios({
        method:'post',
        url:'/user/',
        data
    })
};

const logout = () => {
    localStorage.removeItem('user');
};

export const userService = {login, logout, register};
