import axios from './axios';

const post = (url, data) => axios({
    method: 'post',
    url: url,
    data
});

const post_with_file = (url, data) => axios({
    method: 'post',
    url: url,
    data: data,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
});

const put = (url, data) => axios({
    method: 'put',
    url: url,
    data
});

const get = (url) => axios({
    method: 'get',
    url: url,
});

const del = (url) => axios({
    method: 'delete',
    url: url,
});

export const api = {
    get, del, post, put, post_with_file
};