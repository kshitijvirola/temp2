import React, { Component } from "react";
import { Card } from "antd";

export default class CardUI extends Component {
  render() {
    const { props, children } = this.props;
    return <Card {...props}>{children}</Card>;
  }
}
