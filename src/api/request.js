import qs from 'qs'
import {
  assert
} from '../utils/helper'
import axios from 'axios'
import exception from '../utils/exception'

let instance = axios.create({
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  },
  responseType: 'json',
  transformRequest: [function (data, headers) {
    if (assert.isFormData(data) || typeof data === 'string') {
      return data
    }
    return qs.stringify(data)
  }],
  transformResponse: [function (data) {
    return data
  }]

})

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  let {
    status,
    data
  } = response
  if (status !== 200) {
    return Promise.reject(exception.MSG_NETWORK_ERROR)
  }
  if (!data) {
    return Promise.reject(exception.MSG_SERVER_ERROR)
  }

  if (String(data.head && data.head.retCode) !== '0000') {
    return data && data.head && data.head.retMsg ? Promise.reject(data.head.retMsg) : Promise.reject(exception.MSG_REQUEST_FAIL)
  }
  return data
}, function (error) {
  return Promise.reject(error)
})

export default instance
