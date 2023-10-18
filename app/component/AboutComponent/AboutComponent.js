import React, { Component } from "react";
import Image from "next/image";
import "./aboutcomponent.scss";
import about from "../../../public/assets/Images/about.jpg";
import lineround from "../../../public/assets/Images/Line-round.png";
import blob from "../../../public/assets/Images/Blob.png";

export default class AboutComponent extends Component {
  renderCountDivData = [
    { name: "persons_mentored", number: 80 },
    { name: "seminar_speaker", number: 35 },
    { name: "coaching_certificates", number: 12 },
  ];
  render() {
    return (
      <div className="home_page_about">
        <div className="home_page_about_lhs">
          <h2 className="about_me_">About Me</h2>
          <div className="count_wrapper">
            {this.renderCountDivData.map((item) => {
              return (
                <div className="count_subwrapper">
                  <h2 className="count_">{item.number}</h2>
                  <span className="count_type">
                    {item.name.replaceAll("_", " ")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="home_page_about_rhs">
          <h2 className="description_header">
            Hi, I'm <span style={{ color: "#F49785" }}>Ammelia</span>
          </h2>
          <div className="description_">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </div>
          <button className="btn">Read more</button>
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
    );
  }
}
