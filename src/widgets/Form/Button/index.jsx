import './index.scss'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cls from 'classnames'

const prefixCls = 'widget-button'
export default class Index extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick() {}
  }

  constructor(props) {
    super(props)
  }

  render() {
    let {
      className,
      style,
      children,
      onClick,
      ...props
    } = this.props
    return (
      <button
        className={cls(`${prefixCls}`, className)}
        style={style}
        onClick={onClick.bind(this)}
        {...props}
      >{children}</button>
    )
  }
}
