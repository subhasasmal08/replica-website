import React, { Component } from "react";
import "./benefits.scss";

export default class Benefits extends Component {
  render() {
    return <div className="benefits_wrapper">{this.props.icon}
    <p className="header_">{this.props.title}</p>
    <p className="content_">{this.props.content}</p>
    </div>;
  }
}
