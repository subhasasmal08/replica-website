import React, { Component } from "react";
import Benefits from "../Benefits/Benefits";
import "../../home.scss";
import { Consultancy, Mindfullness, SelfDevelopment, Star } from "@/app/page";

export default class BenefitComponent extends Component {
  BenefitsData = [
    {
      icon: <Star />,
      title: "Achieve Life Goals",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: <Consultancy />,
      title: "Ask Consultancy ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: <Mindfullness />,
      title: "Mindfullness",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      icon: <SelfDevelopment />,
      title: "Self Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];

  componentDidMount() {
    const element = document.querySelector(".benefit_header");
    const observer = new IntersectionObserver((entries) => {
      element.classList.toggle("in-up", entries[0].isIntersecting);
    });

    observer.observe(element);
  }
  render() {
    return (
      <div className="home_page_benefit">
        <h2 className="benefit_header">
          Coaching
          <span className="benefit_">Benefit</span>
        </h2>
        <p className="benefit_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="benefits_block">
          {this.BenefitsData.map((item, index) => {
            return (
              <Benefits
                index={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
