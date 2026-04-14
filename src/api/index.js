import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
import request from '../utils/service'
///配置请求域名地址
axios.defaults.baseURL = 'http://demo.ittun.com'

export function commAxiosRequest(param, iscors, $this) {
  // debugger;
  param.apiurl =
    param.apiurl.indexOf('?') >= 0
      ? param.apiurl + qs.stringify(param.query)
      : param.apiurl + '?' + qs.stringify(param.query)
  param.query = {}
  /// 新增的token信息
  if ($this != null && $this.tokenInfo != null && param.apiparam != null) {
    if ($this.tokenInfo.body != null) {
      for (let key in $this.tokenInfo.body) {
        if (param.apiparam.body[key] == null) {
          param.apiparam.body[key] = $this.tokenInfo.body[key]
        }
      }
    }
    if ($this.tokenInfo.head != null) {
      for (let key in $this.tokenInfo.head) {
        if (param.apiparam.head[key] == null) {
          param.apiparam.head[key] = $this.tokenInfo.head[key]
        }
      }
    }
    if ($this.tokenInfo.query != null) {
      for (let key in $this.tokenInfo.query) {
        if (param.apiparam.query[key] == null) {
          param.apiparam.query[key] = $this.tokenInfo.query[key]
        }
      }
    }
  }
  if (param.ajaxType == 'post') {
    if (param.requestType == 'form-data') {
      const formData = new FormData()
      for (let key in param.apiparam.body) {
        if (typeof param.apiparam.body[key] == 'object') {
          formData.append(key, JSON.stringify(param.apiparam.body[key]))
        } else {
          formData.append(key, param.apiparam.body[key])
        }
      }
      param.apiparam.body = formData
    } else if (param.requestType == 'x-www-form-urlencoded') {
      const params = new URLSearchParams()
      for (let key in param.apiparam.body) {
        if (typeof param.apiparam.body[key] == 'object') {
          params.append(key, JSON.stringify(param.apiparam.body[key]))
        } else {
          params.append(key, param.apiparam.body[key])
        }
      }
      param.apiparam.body = params
    }
  }
  // 是否系统Api接口
  if (param.system == true) {
    return request({
      url: param.apiurl,
      method: param.ajaxType,
      data: param.apiparam == null ? {} : param.apiparam.body,
      params: param.apiparam == null ? {} : param.apiparam.query,
      headers: param.apiparam == null ? {} : param.apiparam.head,
    })
  } else {
    // 外部Api接口 调用
    return axios({
      method: param.ajaxType, // 或 'get', 'put', 'delete' 等
      url: param.apiurl,
      data: param.apiparam == null ? {} : param.apiparam.body,
      params: param.apiparam == null ? {} : param.apiparam.query,
      headers: param.apiparam == null ? {} : param.apiparam.head,
    })
  }
}
export function ajaxComm(apicode, param) {
  let apiurl = '/ui/common/apicomm/' + apicode
  if (param.query != null) {
    apiurl = apiurl + '?' + qs.stringify(param.query)
  }
  return request({
    url: apiurl,
    method: 'post',
    data: param.body,
  })
}
