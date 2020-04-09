import axios from 'axios'
import { config } from './config'

const axiosInstance = axios;
axiosInstance.defaults.baseURL = config.apiUrl
export default axiosInstance;