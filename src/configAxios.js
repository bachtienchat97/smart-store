import axios from "axios";
import { BASE_URL } from "./constants/index";

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


httpClient.interceptors.request.use(
  
  function (config) {
    try {
      const token = 'token'

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
    } catch (error) {
      console.log(error)
    }
    // Do something before request is sent
    
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {

    return Promise.reject(error.response.data);
  }
);
export default httpClient;
