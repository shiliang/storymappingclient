import axios from 'axios'
import qs from 'qs'
axios.defaults.retry = 4
axios.defaults.retryDelay = 1000

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
