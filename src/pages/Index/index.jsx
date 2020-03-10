import './index.less'

import React, { Component } from 'react'
import cls from 'classnames'
// import PropTypes from 'prop-types'

// import { Button } from "antd-mobile"

const prefixCls = 'page_index'
class Index extends Component {
  render() {
    return (
      <div className={cls(`${prefixCls}`)}>
        <div>
          <span className="color-primary">This is index.</span>
          <a href="#/detail">去detail</a>
        </div>
      </div>
    )
  }
}

export default Index
