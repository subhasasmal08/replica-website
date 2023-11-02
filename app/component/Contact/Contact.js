import React, { Component } from "react";
import "./contact.scss";
import Button from "../Button/Button";

export default class Contact extends Component {
  render() {
    return (
      <div className="service_contact_rhs">
        <div className="upper_">
          <div className="input_wrapper">
            <label req={"*"}>First Name </label>
            <input className="input_" />
          </div>
          <div className="input_wrapper">
            <label req={"*"}>Last Name </label>
            <input className="input_" />
          </div>
        </div>
        <div className="mid_">
          <div className="input_wrapper">
            <label req={"*"}>Email Address </label>
            <input className="input_" />
          </div>
        </div>
        <div className="lower_">
          <div className="input_wrapper">
            <label req={"*"}>Questions </label>
            <textarea className="input_" />
          </div>
        </div>
        <Button name={"Send Message"} />
      </div>
    );
  }
}
