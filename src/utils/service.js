import { getToken, setToken } from './auth.js'
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import Configs from '@/configs'

const service = axios.create({
  baseURL: Configs.apiUrl, // process.env.VUE_APP_BASE_API
  timeout: 60000, // request timeout
})
export function makeid(num) {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < num; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
// request interceptor
service.interceptors.request.use(
  (config) => {
    let token = getToken()

    config.headers.Authorization = 'Bearer ' + token
    // const sid = getSidkey()
    // if (sid !== '' && sid !== undefined && sid !== 'undefined') {
    //     config.headers.__sid = sid
    //     config.headers.__ajax = 'json'
    // }
    //  else {
    //     window.location.href = '/login'
    // }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.headers.token !== undefined && response.headers.token !== '') {
      setToken(response.headers.token)
    }
    if (response.request.responseType === 'blob') {
      return response
    }
    if (res.code === 10001) {
      let fullUrl = window.location.href
      if (fullUrl.indexOf('/big?projectId=') > 0) {
        MessageBox('登录已过期！请新建浏览器窗口登录以防数据丢失！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          window.open('/login')
        })
      } else if (fullUrl.indexOf('/login') < 0) {
        window.location.href = '/login?redirect=' + encodeURIComponent(fullUrl)
      }

      return false
    }
    if (
      res.code !== 0 &&
      res.code !== undefined &&
      res.code !== 200 &&
      res.code !== 501 &&
      response.config.url.indexOf('common/WebApiRequest') < 0
    ) {
      Message.error(res.msg)
      return res
    }

    return res
  },
  (error) => {
    Message.error('系统发生错误！请与管理员联系！')
    return { code: error.response.status, msg: error.response.data }
  }
)

export default service
