import * as axios from 'axios';

const request = (url, options) => {

    let config = {
        url: url,
        ...options,
    };

    let response;
    try {
        console.log('request', config);
        response = axios(config);
        console.log('Response:', response);
    } catch (error) {
        console.error(error);
    }
    return response;
};

export default request;
