import React, { Component } from "react";
import hero from "../../../public/assets/Images/hero1.png";
import BigStar from "../../../public/assets/Images/Bigstar.png";
import upwards from "../../../public/assets/Images/upwards.png";
import bulb from "../../../public/assets/Images/bulb.png";
import plane from "../../../public/assets/Images/plane.png";
import heart from "../../../public/assets/Images/heart.png";
import Image from "next/image";
import Button from "../Button/Button";

export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home_page_main_wrapper">
        <div className="partition_wrapper">
          <div className="lhs_wrapper">
            <div className="lhs_header">
              <Image
                src={BigStar}
                alt="BigStar"
                className="bigstar_image"
                placeholder="blur"
              />
              <h2 className="header_ in-left">
                Support your personal development and chase your dream
              </h2>
              <Image
                src={BigStar}
                alt="smallStar"
                className="smallstar_image"
                placeholder="blur"
              />
            </div>
            <p className="lhs_subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <Button name={"Get Started Today"} />
          </div>
          <div className="rhs_wrapper">
            <Image
              src={upwards}
              alt="upwards"
              className="upwards"
              placeholder="blur"
            />
            <Image src={bulb} alt="bulb" className="bulb" placeholder="blur" />
            <Image
              src={plane}
              alt="plane"
              className="plane"
              placeholder="blur"
            />
            <Image
              src={heart}
              alt="heart"
              className="heart"
              placeholder="blur"
            />
            <Image src={hero} alt="hero" className="hero" placeholder="blur" />
          </div>
        </div>
      </div>
    );
  }
}
