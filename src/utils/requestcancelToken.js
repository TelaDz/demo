import axios from 'axios'
import { message } from 'antd'
import qs from 'qs'
const CancelToken = axios.CancelToken
const source = CancelToken.source()
const pendingRequest = new Map()
const Cookies = require('js-cookie')
function removePendingRequest(config, cancel) {
  const key = config.url
  if (pendingRequest.has(key)) {
    cancel('重复请求')
  } else {
    pendingRequest.delete(key)
  }
}
function addPendingRequest(config) {
  const { method, url, data } = config
  const key = url
  const value = [method, qs.stringify(data)].join('&')
  pendingRequest.set(key, value)
}
var csrftoken = Cookies.get('csrfToken')
const instance = axios.create({
  timeout: 50000,
  headers: { 'Content-Type': 'application/json', 'x-csrf-token': csrftoken }
  // headers: { 'x-csrf-token': csrftoken }
})
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // config.cancelToken = new CancelToken(function executor(c) {
    //   removePendingRequest(config, c)
    // })
    // addPendingRequest(config)

    console.log('config', config)
    return config
  },
  error => {
    console.log('error', error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // console.log('response', response)
    // const key = response.config.url
    // if (response.data) {
    //   pendingRequest.delete(key)
    // }
    return response.data
  },
  // 对响应数据做点什么
  err => {
    console.log('err', err)
    if (err && err.response) {
      // switch (err.response.status) {
      //   case 400:
      //     err.message = '错误请求'
      //     break
      //   case 401:
      //     err.message = '未授权，请重新登录'
      //     break
      //   case 403:
      //     err.message = '拒绝访问'
      //     break
      //   case 404:
      //     err.message = '请求错误,未找到该资源'
      //     break
      //   case 405:
      //     err.message = '请求方法未允许'
      //     break
      //   case 408:
      //     err.message = '请求超时'
      //     break
      //   case 500:
      //     err.message = '服务器端出错'
      //     break
      //   case 501:
      //     err.message = '网络未实现'
      //     break
      //   case 502:
      //     err.message = '网络错误'
      //     break
      //   case 503:
      //     err.message = '服务不可用'
      //     break
      //   case 504:
      //     err.message = '网络超时'
      //     break
      //   case 505:
      //     err.message = 'http版本不支持该请求'
      //     break
      //   default:
      //     err.message = `连接错误${err.response.status}`
      // }
      // let errData = {
      //   code: err.response.status,
      //   message: err.message
      // }
      // 统一错误处理可以放这，例如页面提示错误...
      // console.log('统一错误处理: ', errData)
    }

    return Promise.reject(err)
  }
  // 对响应错误做点什么
)

const request = async (url = '', data = {}, config = {}) => {
  const { method = 'post' } = config
  let res = await instance({
    url,
    method,
    data
  }).catch(function (err) {
    if (axios.isCancel(err)) {
      message.info('重复提交相同信息:' + err)
    } else {
      // 处理错误
    }
  })
  return res
}
export default request
