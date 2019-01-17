// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = Axios

Axios.defaults.baseURL = 'http://localhost:8090'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
/* Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  if (config.method === 'post') {
    // 将请求参数进行转换，这里是全局配置post请求参数
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
}) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
