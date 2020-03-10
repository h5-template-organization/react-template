let devBaseURL = 'http://162.16.2.158:8080/'
// let devBaseURL = 'http://bcs.link-us.com.cn/directBank/158/'
let sitBaseURL = ''
let uatBaseURL = ''
let prodBaseURL = ''
let useBaseURL = '' // 接口URL前缀

switch (process.env.API_ENV) {
  case 'dev':
    useBaseURL = devBaseURL
    break
  case 'sit':
    useBaseURL = sitBaseURL
    break
  case 'uat':
    useBaseURL = uatBaseURL
    break
  case 'prod':
    useBaseURL = prodBaseURL
    break
  default:
    break
}

if (process.env.NODE_ENV === 'development') {
  useBaseURL = '/virtualApi'
}

module.exports = {
  devBaseURL,
  sitBaseURL,
  uatBaseURL,
  prodBaseURL,
  useBaseURL
}
