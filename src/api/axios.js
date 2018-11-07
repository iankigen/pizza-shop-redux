import axios from 'axios';
import { BASE_URL } from "../constants";
import { authHeader } from "../helpers/auth-headers";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = authHeader().Authorization;

export default axios;