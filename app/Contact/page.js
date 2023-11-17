"use client";
import React, { Component, useRef } from "react";
import "./contact.scss";
import Footer from "../component/Footer/Footer";
import Contact from "../component/Contact/Contact";
import BigStar from "../../public/assets/Images/Bigstar.png";
import Image from "next/image";
import { FaceBook, Insta, Twitter, Youtube } from "../component/Navbar/Navbar";

class Child extends Component {
  RenderContactCards = [
    {
      icon: <Phone />,
      type: "Phone Number",
      content: "(+62) 8123 456 789",
    },
    {
      icon: <Email />,
      type: "Email Address",
      content: "support@domain.com",
    },
    {
      icon: <Location />,
      type: "Address",
      content: "Canggu, Badung Regency, Bali",
    },
  ];

  render() {
    return (
      <div className="contact_wrapper">
        <div className="contact_top_wrapper">
          <div className="contact_header">
            <Image
              src={BigStar}
              alt="BigStar"
              className="bigstar_image"
              placeholder="blur"
            />
            <h2 className="contact_">Contacts</h2>
            <Image
              src={BigStar}
              alt="smallStar"
              className="smallstar_image"
              placeholder="blur"
            />
          </div>

          <p className="contact_content">Reach me by filling form below</p>
        </div>
        <div className="contact_cards_wrapper">
          {this.RenderContactCards.map((item) => {
            return (
              <div className="contact_card">
                <div className="upper_">
                  {item.icon}
                  <p>{item.type}</p>
                </div>
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
        <div className="contact_form_wrapper">
          <div className="form_subwrapper">
            <div className="form_lhs">
              <h2 className="form_header">
                Get In <span style={{ color: "#C267D1" }}>Touch</span>
              </h2>
              <p className="contact_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="social_media_wrapper">
                <p className="social_media_tag">Social Media:</p>
                <div className="social_media_icons">
                  <Insta className="insta" />
                  <Twitter className="twitter" />
                  <Youtube className="youtube" />
                  <FaceBook className="facebook" />
                </div>
              </div>
            </div>
            <div className="form_rhs">
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const Page = (props) => {
  const ref = useRef();
  return <Child {...props} ref={ref} />;
};

export default Page;

const Phone = (props) => (
  <svg
    fill="#000000"
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    id="phone"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <path
      id="primary"
      d="M20.19,13a10,10,0,0,1-3.43-.91,2,2,0,0,0-2.56.83l-.51.85a12.69,12.69,0,0,1-3.44-3.45l.86-.49a2,2,0,0,0,.83-2.56A10,10,0,0,1,11,3.81,2,2,0,0,0,9,2H5.13A3,3,0,0,0,2.86,3a3.13,3.13,0,0,0-.71,2.43A19,19,0,0,0,18.58,21.85a3,3,0,0,0,.42,0,3,3,0,0,0,2-.73,3,3,0,0,0,1-2.26V15A2,2,0,0,0,20.19,13Z"
      style={{
        fill: "rgb(0, 0, 0)",
      }}
    />
  </svg>
);

const Email = (props) => (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    viewBox="0 0 52 52"
    enableBackground="new 0 0 52 52"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path d="M24.9,30.1c0.6,0.6,1.5,0.6,2.1,0l22.6-21C50,8.3,49.9,7,48.3,7L3.6,7.1c-1.2,0-2.2,1.1-1.3,2.1L24.9,30.1z " />
      <path d="M50,17.3c0-1-1.2-1.6-2-0.9L30.3,32.7c-1.2,1.1-2.7,1.7-4.3,1.7s-3.1-0.6-4.3-1.6L4.1,16.4 c-0.8-0.7-2-0.2-2,0.9C2,17,2,40,2,40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4C50,34,50,21.8,50,17.3z" />
    </g>
  </svg>
);

const Location = (props) => (
  <svg
    fill="#000000"
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z" />
  </svg>
);
