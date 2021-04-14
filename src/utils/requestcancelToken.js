import axios from 'axios'
import { message } from 'antd'
import qs from 'qs'
const CancelToken = axios.CancelToken
// const source = CancelToken.source()
const pendingRequest = new Map()
// let cancel
//generateReqKey：用于根据当前请求的信息，生成请求 Key；
function generateReqKey(config) {
  const { method, url, data } = config
  return [method, url, qs.stringify(data)].join('&')
}
function removePendingRequest(config) {
  const requestKey = generateReqKey(config)
  console.log('pendingRequest', pendingRequest)
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey)
    // console.log('cancelToken', cancelToken)
    cancelToken(e => {
      e()
    })
    pendingRequest.delete(requestKey)
  } else {
    addPendingRequest(config)
  }
}
function addPendingRequest(config) {
  const requestKey = generateReqKey(config)
  config.cancelToken = new CancelToken(cancel => {
    if (!pendingRequest.has(requestKey)) {
      pendingRequest.set(requestKey, cancel)
    }
  })
}
const instance = axios.create({
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    removePendingRequest(config)
    return config
  },
  error => Promise.reject(error)
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  // 对响应数据做点什么
  error => {
    return Promise.reject(error)
  }
  // 对响应错误做点什么
)

const request = async (url = '', data = {}, config = {}) => {
  let res = await instance.post(
    url,
    {
      data,
      ...config
    }
    // {
    //   cancelToken: new CancelToken(function executor(c) {
    //     // executor 函数接收一个 cancel 函数作为参数
    //     cancel = c
    //   })
    // }
  )
  return res
}
export default request
