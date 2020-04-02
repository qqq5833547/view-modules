import axios from 'axios'
import qs from 'qs'
import {
  Loading,
  Message
} from 'element-ui';
import use from '../store/index'
let baseURL = process.env.NODE_ENV==='development'?'/api/':'http://magazine.test.wujinhai.cn'
const service = axios.create({
  baseURL: baseURL,
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000
})
let loadinginstace = null
let shoError = false
service.interceptors.request.use(config => {
  config.data['token'] = use.state.token
  config.data = qs.stringify(config.data)
  shoError = config.showError
  loadinginstace = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.3)',
    customClass: "osloading",
    fullscreen: true
  })
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  return config
}, error => {
  loadinginstace.close()
  Promise.reject(error)
})
service.interceptors.response.use(response => {
  loadinginstace.close()
  if(response.data.success!==1) {
    if (response.data.message === 'invalid token!') {
      use.commit('getToken','')
    } else {
      Message.error(response.data.message)
    }
  }
  return response
}, error => {
  loadinginstace.close()
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      error.message = '服务器响应超时，请刷新当前页'
    }
  }
  /***** 处理结束 *****/
  //如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
})

export default service