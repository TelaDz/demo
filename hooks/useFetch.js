import { useState, useEffect } from 'react'
import { baseUrl } from '../config/config_url.js'
import axios from 'axios'
export function useFetch(url) {
  const [getData, setData] = useState(null)

  let api = '/api' + url
  const getDataApi = async api => {
    const res = await axios.post(api)
    console.log('res', res)
    setData(res)
  }
  getDataApi(api)

  return getData
}
