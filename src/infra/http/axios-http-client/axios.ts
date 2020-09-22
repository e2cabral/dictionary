import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3330/v1/api',
});

export default instance;