import axios from 'axios'
import { message } from 'antd'

const CancelToken = axios.CancelToken

const instance = axios.create({
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // console.log('response', response)
    // if (response.status === 200 && response.statusText === 'OK') {
    //   return response.data
    // } else {
    //   message.warning('请求出错')
    // }
    return response
  },
  // 对响应数据做点什么
  error => {
    // if (axios.isCancel(error)) {
    //   console.log('已取消的重复请求：' + error.message)
    // } else {
    //   // 添加异常处理
    // }
    return Promise.reject(error)
  }
  // 对响应错误做点什么
)

const request = async (url = '', data = {}, config = {}) => {
  let res = await instance.post(url, {
    data,
    ...config
  })
  return res
}
export default request
