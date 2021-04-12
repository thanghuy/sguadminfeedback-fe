import axios from 'axios';
import queryString from 'query-string';
const URL = process.env.REACT_APP_API_URL;
const apiServices = axios.create({
    baseURL : URL,
    headers : {
        'Authorization' : 'Bearer + token',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'

    },
    paramsSerializer : params => queryString.stringify(params),
})

apiServices.interceptors.request.use( async (config) => {
    return config;
});

apiServices.interceptors.response.use(response => {
    if(response && response.data){
        return response.data;
    }
    return response;
}, error => {
    throw(error);
});

export default apiServices;