import Axios from 'axios'

interface AxiosRequestMessage {
  show?: boolean
  callback?: () => void
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    message?: AxiosRequestMessage
  }
}

const axios = Axios.create({
  timeout: 10000,
  withCredentials: true,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
})
axios.interceptors.request.use(request => {
  const { params } = request
  if (params) {
    const keys = Object.keys(params)
    for (const key of keys) {
      const value = params[key]
      switch (value) {
        case undefined:
        case null:
        case '':
          delete params[key]
          break
      }
    }
  }
  return request
})
axios.interceptors.response.use(
  response => {
    const { data } = response
    return data
  },
  error => {
    if (error.message) {
      let __emsg = error.message || ''
      if (__emsg.indexOf('timeout') >= 0) {
        __emsg = '请求超时'
      }
      switch (__emsg) {
        case 'Network Error':
          console.log('网络错误, 无法连接服务器')
          break
        default:
          console.log(__emsg)
          break
      }
    }
    throw error
  },
)

export default axios
