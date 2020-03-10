import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import RouterHook from './router-hook'
import Index from '../pages/Index'
import Detail from '../pages/Detail'

class RouterView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <RouterHook>
            <Route exact path="/" component={ Index } />
            <Route exact path="/detail" component={ Detail } />
          </RouterHook>
        </React.Fragment>
      </Router>
    )
  }
}

export default RouterView
