import axios, {AxiosResponse} from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 60 * 1000,
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    },
    transformResponse: [
        (response: AxiosResponse) => {
            return response.data
        },
    ],
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
var a = 1;