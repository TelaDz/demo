import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' }
  // headers: { 'x-csrf-token': csrftoken }
})
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  // 对响应数据做点什么
  err => {
    return Promise.reject(err)
  }
  // 对响应错误做点什么
)

// const request = async (url = '', data = {}, config = {}) => {
//   const { method = 'post' } = config
//   let res = await instance({
//     url,
//     method,
//     data
//   }).catch(function (err) {
//     message.info(err)
//     return res
//   })
// }
// export default request
export default instance
