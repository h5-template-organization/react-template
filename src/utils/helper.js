const UA = window.navigator.userAgent

function toString(val) {
  return Object.prototype.toString.call(val)
}
/* 数据类型判断 */
export const assert = {
  isNaN(val) {
    return Number.isNaN(val)
  },
  isNumber(val) {
    return toString(val) === '[object Number]'
  },
  isBoolean(val) {
    return toString(val) === '[object Boolean]'
  },
  isString(val) {
    return toString(val) === '[object String]'
  },
  isArray(val) {
    return toString(val) === '[object Array]'
  },
  isObject(val) {
    return toString(val) === '[object Object]'
  },
  isFormData(val) {
    return toString(val) === '[object FormData]'
  }
}

/* 防抖 */
export class Debounce {
  constructor(props = {}) {
    this._sleep = props.sleep || 100 // ms
    this._timestamp = ''
  }

  // 装饰执行函数
  design(callback) {
    if (this._timestamp) {
      clearTimeout(this._timestamp)
    }
    this._timestamp = setTimeout(() => {
      clearTimeout(this._timestamp)
      this._timestamp = ''
      callback && callback() // 执行回调函数
    }, this._sleep)
  }
}

/* 获取静态资源子目录 */
export function assetsSubDirectory() {
  if (process.env.NODE_ENV === 'development') {
    return `${location.origin}/static/`
  }
  let currentJs = document.scripts[document.scripts.length - 1].src
  let tokens = /^(http.+\/static\/)(.+\.js)$/i.exec(currentJs)
  return tokens[1]
}

/* 格式化 */
export const format = {

}

/* 运行平台区分 */
export const platform = {
  // iOS
  get isiOS() {
    return /iphone|ipad|ipod/i.test(UA)
  },
  // 安卓
  get isAndroid() {
    return /android/i.test(UA)
  },
  // 微信
  get isWeChat() {
    return /MicroMessenger/i.test(UA)
  },
  // 微博
  get isWeibo() {
    return /Weibo/i.test(UA)
  }
}

/* 常用业务数据校验 */
export const validate = {
  // 手机号验证
  phone(val) {
    return /^1\d{10}$/.test(val)
  },
  // 身份证号验证
  identityCard(val) {
    return /^(\d{15})|(\d{17}[\dX])$/i.test(val)
  },
  // 地址验证
  address(val) {
    return /[^\s'"<>&]/.test(val)
  }
}

/* 常用字段显示过滤 */
export const filter = {
  // 手机号过滤
  phone(val) {
    return val ? val.replace(/[^\d]/g, '') : ''
  },
  // 金额合法性过滤
  money(val) {
    return val ? val.replace(/[^\d.]/g, '') : ''
  },
  // 地址过滤
  address(val) {
    return val ? val.replace(/[\s'"<>&]/g, '') : ''
  }
}

// 编码
export function encode(val) {
  return encodeURIComponent(encodeURIComponent(val))
}

// 解码
export function decode(val) {
  return decodeURIComponent(decodeURIComponent(val))
}
