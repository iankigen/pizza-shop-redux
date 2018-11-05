import axios from 'axios';
import { BASE_URL } from "../constants";
import { authHeader } from "../helpers/auth-headers";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = authHeader();
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;