import React, { Component } from "react";
import "./benefits.scss";

export default class Benefits extends Component {
  componentDidMount() {
    const element = document.querySelector(
      ".benefits_wrapper" + this.props.index
    );
    const observer = new IntersectionObserver((entries) => {
      element.classList.toggle("in-up", entries[0].isIntersecting);
    });

    observer.observe(element);
  }
  render() {
    return (
      <div className={"benefits_wrapper" + this.props.index}>
        {this.props.icon}
        <p className="header_">{this.props.title}</p>
        <p className="content_">{this.props.content}</p>
      </div>
    );
  }
}
