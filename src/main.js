import '@/assets/css/main.less'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import webVersionCheck from 'web-version-check'

import RouterView from './router'
import store from './store'

import HeaderNavbar from '@/components/HeaderNavbar'

import { version } from '../static/version.json'
import { assetsSubDirectory } from '@/utils/helper'
// import apis from '@/api/index'
// React.Component.prototype.$apis = apis

// if (process.env.API_ENV === 'dev' || process.env.API_ENV === 'sit') {
//   const VConsole = require('vconsole')
//   // eslint-disable-next-line
//   new VConsole()
// }

// 强制清除上一版本缓存
webVersionCheck({
  clientVersion: version,
  safeVersionUrl: `${assetsSubDirectory()}version.json?timestamp=${Date.now()}`,
  fail() {
    window.location.reload(true)
  }
})

console.log(`app: ${version} - ${process.env.NODE_ENV}`)
console.log(document.getElementsByClassName('page_index'))
const Root = () => (
  <Provider store={store}>
    <React.Fragment>
      <HeaderNavbar />
      <RouterView />
    </React.Fragment>
  </Provider>
)

ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
