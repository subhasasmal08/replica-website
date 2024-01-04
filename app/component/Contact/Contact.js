import React, { Component, useRef } from "react";
import "./contact.scss";
import Button from "../Button/Button";
import emailjs from "@emailjs/browser";
import { notify } from "@/app/layout";

class Child extends Component {
  sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    // console.log(this.props.ref.current);
    console.log("sendEmail");
    emailjs
      .sendForm(
        "service_j64f6lg",
        "template_3kk2nb3",
        this.props.form.current,
        "_qkp45k05hE92TgB9"
      )
      .then(
        (result) => {
          console.log(result);
          notify({
            type: "success",
            msg: "Mail sent successfully!",
          });
          // show the user a success message
        },
        (error) => {
          console.log(error);
          notify({
            type: "error",
            msg: "Something went wrong!",
          });
          // show the user an error
        }
      );
  };
  render() {
    return (
      <form
        className="service_contact_rhs"
        ref={this.props.form}
        onSubmit={this.sendEmail}
      >
        {console.log(this.props.form.current)}
        <div className="upper_">
          <div className="input_wrapper">
            <label req={"*"}>First Name </label>
            <input className="input_" name="user_name" />
          </div>
          <div className="input_wrapper">
            <label req={"*"}>Last Name </label>
            <input className="input_" name="last_name" />
          </div>
        </div>
        <div className="mid_">
          <div className="input_wrapper">
            <label req={"*"}>Email Address </label>
            <input className="input_" name="user_email" />
          </div>
        </div>
        <div className="lower_">
          <div className="input_wrapper">
            <label req={"*"}>Questions </label>
            <textarea className="input_" name="message" />
          </div>
        </div>
        {/* <Button name={"Send Message"} onClick={this.sendEmail} /> */}
        <input className="submit_btn" type="submit" value="Send" />
      </form>
    );
  }
}

const Page = (props) => {
  const form = useRef();
  return <Child {...props} form={form} />;
};

export default Page;
