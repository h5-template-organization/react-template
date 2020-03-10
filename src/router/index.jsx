import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import RouterHook from "./router-hook";
import Index from "../pages/Index";

class RouterView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <RouterHook>
            <Route exact path="/" component={Index} />
          </RouterHook>
        </React.Fragment>
      </Router>
    );
  }
}

export default RouterView;
