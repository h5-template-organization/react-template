// eslint-disable-next-line
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Index extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      initApp: false // 应用初始化完成
    }
  }

  componentDidMount() {
    this.setState({
      initApp: true
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.state.initApp ? this.props.children : <div></div>
  }
}

export default withRouter(Index)
