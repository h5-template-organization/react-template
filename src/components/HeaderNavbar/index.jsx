import './index.less'

import React, { Component } from 'react'
import cls from 'classnames'
import PropTypes from 'prop-types'

import {
  NavBar,
  Icon
} from 'antd-mobile'

const prefixCls = 'header_navbar'

export default class Index extends Component {
  static propTypes = {
    edit: PropTypes.bool,
    onEdit: PropTypes.func,
    title: PropTypes.string
  }
  static defaultProps = {
    title: 'NavBar'
  }
  constructor(props) {
    super(props)
  }
  // edit: 是否可编辑 onEdit()：进入编辑状态
  // 返回上一页
  backClick() {
    history.go(-1)
  }
  // 可编辑
  edit() {
    this.props.onEdit()
  }
  render() {
    return (
      <div className={cls(`${prefixCls}`)}>
        <NavBar onLeftClick={this.backClick.bind(this)} rightContent={this.props.edit ? <span onClick={this.edit.bind(this)}><img className='editIcon' src={require('@/assets/imgs/edit.png')}/></span> : ''} mode="light" icon={<Icon type="left" />}>{this.props.title}</NavBar>
      </div>
    )
  }
}
