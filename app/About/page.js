"use client";
import React, { Component } from "react";
import "./about.scss";
import Image from "next/image";
import AboutComponent from "../component/AboutComponent/AboutComponent";
import { Quotes } from "../page";
import BlogComponent from "../component/BlogComponent/BlogComponent";
import Footer from "../component/Footer/Footer";
import journey from "../../public/assets/Images/journey.jpeg";
import lineround from "../../public/assets/Images/Line-round.png";
import blob from "../../public/assets/Images/Blob.png";
import about from "../../public/assets/Images/about.jpg";
import signature from "../../public/assets/Images/signature.png";
import BigStar from "../../public/assets/Images/Bigstar.png";

export default class page extends Component {
  renderJourneyData = [
    {
      icon: <Mic />,
      header: "Seminar Speaker",
      count: 35,
    },
    {
      icon: <People />,
      header: "Persons Mentored",
      count: 35,
    },
    {
      icon: <Certificate />,
      header: "Coaching Certificates",
      count: 35,
    },
  ];

  renderCountDivData = [
    { name: "persons_mentored", number: 80 },
    { name: "seminar_speaker", number: 35 },
    { name: "coaching_certificates", number: 12 },
  ];
  render() {
    return (
      <div className="about_wrapper">
        <div className="about_top_wrapper">
          <div className="about_header">
            <Image
              src={BigStar}
              alt="BigStar"
              className="bigstar_image"
              placeholder="blur"
            />
            <h2 className="about_">About Me</h2>
            <Image
              src={BigStar}
              alt="smallStar"
              className="smallstar_image"
              placeholder="blur"
            />
          </div>
          <p className="about_content">Get to know me more</p>
        </div>
        <div className="home_page_about">
          <div className="home_page_about_rhs">
            <h2 className="description_header">
              Hi, I'm <span style={{ color: "#F49785" }}>Ammelia</span>
            </h2>
            <p className="subheader">Life coach and master of goals.</p>
            <div className="description_">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <Image
              src={signature}
              alt="signature"
              className="signature_image"
              placeholder="blur"
            />
          </div>
          <div className="home_page_about_image">
            <Image
              src={about}
              alt="about"
              className="about_image"
              placeholder="blur"
            />
            <Image
              src={lineround}
              alt="lineround"
              className="lineround_image"
              placeholder="blur"
            />
            <Image
              src={blob}
              alt="blob"
              className="blob_image"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="about_quotes_wrapper">
          <Quotes className="quotes_image" />
          <h2 className="header_">
            "The whole secret of a successful life is to find out what is one’s
            destiny to do, and then do it."
          </h2>
          <p className="author">-Hery Ford</p>
        </div>
        <div className="about_journey_wrapper">
          <div className="about_"></div>
          <div className="about_journey_subwrapper">
            <div className="journey_lhs">
              <p className="journey_">My Journey</p>
              <h2 className="many_">
                Many <span style={{ color: "#F49785" }}>Twist & Turns</span>
              </h2>
              <p className="journey_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <div className="journey_cards_wrapper">
                {this.renderJourneyData.map((item) => {
                  return (
                    <div className="journey_card">
                      <p className="icon_">{item.icon}</p>
                      <p className="count_">{item.count}</p>
                      <p className="header_">{item.header}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="journey_rhs">
              <Image
                src={journey}
                alt="journey"
                className="journey_image"
                placeholder="blur"
              />
              <Image
                src={lineround}
                alt="lineround"
                className="lineround_image"
                placeholder="blur"
              />
              <Image
                src={blob}
                alt="blog"
                className="blog_image"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="about_dreams_wrapper">
          <div className="dreams_"></div>
          <div className="about_journey_subwrapper">
            <h2 className="unlock_">
              Unlock Your <span style={{ color: "#C267D1" }}>Dreams</span>
            </h2>
            <p className="content_">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className="btn">Start Consultation</button>
          </div>
        </div>
        <BlogComponent />
        <Footer />
      </div>
    );
  }
}

const Mic = (props) => (
  <svg
    fill="#F49785"
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13,19.9381062 L13,21 L16,21 L16,23 L8,23 L8,21 L11,21 L11,19.9381062 C7.05368842,19.4460082 4,16.0796177 4,12 L4,10 L6,10 L6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 L18,10 L20,10 L20,12 C20,16.0796177 16.9463116,19.4460082 13,19.9381062 Z M12,1 C14.209139,1 16,2.790861 16,5 L16,12 C16,14.209139 14.209139,16 12,16 C9.790861,16 8,14.209139 8,12 L8,5 C8,2.790861 9.790861,1 12,1 Z M12,3 C10.8954305,3 10,3.8954305 10,5 L10,12 C10,13.1045695 10.8954305,14 12,14 C13.1045695,14 14,13.1045695 14,12 L14,5 C14,3.8954305 13.1045695,3 12,3 Z"
    />
  </svg>
);

const People = (props) => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#F49785"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...props}
  >
    <circle cx={5} cy={9} r={2.25} />
    <circle cx={11} cy={4} r={2.25} />
    <path d="m7.75 9.25c0-1 .75-3 3.25-3s3.25 2 3.25 3m-12.5 5c0-1 .75-3 3.25-3s3.25 2 3.25 3" />
  </svg>
);

const Certificate = (props) => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 14.5H9C9 14.6894 9.107 14.8625 9.27639 14.9472C9.44579 15.0319 9.64849 15.0136 9.8 14.9L9.5 14.5ZM11.5 13L11.8 12.6C11.6222 12.4667 11.3778 12.4667 11.2 12.6L11.5 13ZM13.5 14.5L13.2 14.9C13.3515 15.0136 13.5542 15.0319 13.7236 14.9472C13.893 14.8625 14 14.6894 14 14.5H13.5ZM11.5 11C10.1193 11 9 9.88071 9 8.5H8C8 10.433 9.567 12 11.5 12V11ZM14 8.5C14 9.88071 12.8807 11 11.5 11V12C13.433 12 15 10.433 15 8.5H14ZM11.5 6C12.8807 6 14 7.11929 14 8.5H15C15 6.567 13.433 5 11.5 5V6ZM11.5 5C9.567 5 8 6.567 8 8.5H9C9 7.11929 10.1193 6 11.5 6V5ZM9 10.5V14.5H10V10.5H9ZM9.8 14.9L11.8 13.4L11.2 12.6L9.2 14.1L9.8 14.9ZM11.2 13.4L13.2 14.9L13.8 14.1L11.8 12.6L11.2 13.4ZM14 14.5V10.5H13V14.5H14ZM15 5V1.5H14V5H15ZM13.5 0H1.5V1H13.5V0ZM0 1.5V13.5H1V1.5H0ZM1.5 15H8V14H1.5V15ZM0 13.5C0 14.3284 0.671573 15 1.5 15V14C1.22386 14 1 13.7761 1 13.5H0ZM1.5 0C0.671574 0 0 0.671573 0 1.5H1C1 1.22386 1.22386 1 1.5 1V0ZM15 1.5C15 0.671573 14.3284 0 13.5 0V1C13.7761 1 14 1.22386 14 1.5H15ZM3 5H8V4H3V5ZM3 8H6V7H3V8Z"
      fill="#F49785"
    />
  </svg>
);
