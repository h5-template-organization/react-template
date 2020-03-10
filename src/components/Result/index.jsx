import "./index.less";
import React, { Component } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import { Result, Button } from "antd-mobile";

const prefixCls = "result";

export default class Index extends Component {
  static propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    primaryBtnText: PropTypes.string,
    normalBtnText: PropTypes.string,
    normalBtnClick: PropTypes.func,
    primaryBtnClick: PropTypes.func
  };
  static defaultProps = {
    img: require("@/assets/imgs/img-success.png"),
    title: "",
    message: "",
    primaryBtnText: "",
    normalBtnText: ""
  };

  constructor(props) {
    super(props);
  }

  normalBtnClick() {
    this.props.normalBtnClick();
  }

  primaryBtnClick() {
    this.props.primaryBtnClick();
  }

  render() {
    const myImg = src => <img src={src} />;
    return (
      <div className={cls(`${prefixCls}`)}>
        <Result
          img={myImg(this.props.img)}
          title={this.props.title}
          message={this.props.message}
        />
        {this.props.normalBtnText !== "" ? (
          <Button
            className="btn btn-normal"
            onClick={this.normalBtnClick.bind(this)}
          >
            {this.props.normalBtnText}
          </Button>
        ) : (
          ""
        )}
        {this.props.primaryBtnText !== "" ? (
          <Button
            className="btn btn-primary"
            type="primary"
            onClick={this.primaryBtnClick.bind(this)}
          >
            {this.props.primaryBtnText}
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  }
}
