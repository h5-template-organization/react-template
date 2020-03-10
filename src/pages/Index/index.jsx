import "./index.less";

import React, { Component } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import { Button } from "antd-mobile";

const prefixCls = "page_index";
class Index extends Component {
  static propTypes = {
    history: PropTypes.object,
    count: PropTypes.number,
    increment: PropTypes.func,
    // history: PropTypes.object,
    incrementAsync: PropTypes.func
  };
  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cls(`${prefixCls}`)}>
        <div>
          <span className="color-primary">This is index.</span>
        </div>
      </div>
    );
  }
}

export default Index;
