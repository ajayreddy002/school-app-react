import axios from 'axios';
// You can use any cookie library or whatever
// library to access your client storage.

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')

    if (token != null) {
        config.headers.Authorization = `${token}`;
    }

    return config;
}, function (err) {
    return Promise.reject(err);
});