import request from './request'
import apiConfig from './config'

let baseURL = apiConfig.useBaseURL
let api = {}

/* 用户数据接口 */
api.user = {
  // 获取验证码接口
  sendHeartCardSmsCode(data) {
    return request({
      url: '/a/b',
      method: 'get',
      baseURL,
      data: data
    })
  }
}

export default api
