import axios from "axios"
import configRequestInterceptor from './request'
import configResponseInterceptor from './response'

const axiosInstance = axios.create();
configRequestInterceptor(axiosInstance)
configResponseInterceptor(axiosInstance)
export default axiosInstance;

