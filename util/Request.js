import * as axios from 'axios';

const host = 'https://5ee3417e8b27f3001609562a.mockapi.io';

const request = (url, options) => {
    let URL = host + '/api' + url;

    let config = {
        url: URL,
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
