import { Plan, Tick } from "@/app/page";
import React, { Component } from "react";
import "./plancomponent.scss";
import Image from "next/image";
import base from "../../../public/assets/Images/base.png";
import pro from "../../../public/assets/Images/pro.png";
import elite from "../../../public/assets/Images/elite.png";
import Button from "../Button/Button";

export default class PlanComponent extends Component {
  renderPlanData = [
    {
      icon: base,
      header: "Base Plan",
      Subheader: "What you'll get",
      points: [
        "1 on 1 Session",
        "100 Minutes Session",
        "Career Counselling",
        "Customize Goal Path",
        "Development Perspective",
        "Career Advice",
      ],
      price: "$65",
    },
    {
      icon: pro,
      header: "Pro Plan",
      Subheader: "What you'll get",
      points: [
        "1 on 1 Session",
        "100 Minutes Session",
        "Career Counselling",
        "Customize Goal Path",
        "Development Perspective",
        "Career Advice",
        "Support Over Email",
      ],
      price: "$65",
    },
    {
      icon: elite,
      header: "Elite Plan",
      Subheader: "What you'll get",
      points: [
        "1 on 1 Session",
        "100 Minutes Session",
        "Career Counselling",
        "Customize Goal Path",
        "Development Perspective",
        "Career Advice",
      ],
      price: "$65",
    },
  ];

  componentDidMount() {
    const element = document.querySelector(".plan_header");
    const observer = new IntersectionObserver((entries) => {
      element.classList.toggle("in-up", entries[0].isIntersecting);
    });

    observer.observe(element);

    const element_ = document.querySelector(".plan_card_content");
    const observer_ = new IntersectionObserver((entries) => {
      element_.classList.toggle("in-up", entries[0].isIntersecting);
    });

    observer_.observe(element_);
  }
  render() {
    return (
      <div className="home_page_plan">
        <div className="home_page_plan_wrapper">
          <h2 className="plan_header">
            Learn the secrets to{" "}
            <span style={{ color: "#c267d1" }}>Life Success</span>
          </h2>
          <p className="plan_card_content">
            Maximize your potentials now, several bundle packages that you can
            choose
          </p>
          <div className="plan_cards_wrapper">
            {this.renderPlanData.map((item, index) => {
              return (
                <div
                  className={
                    index === 0
                      ? "plan_card start"
                      : index === 1
                      ? "plan_card middle"
                      : index === 2
                      ? "plan_card end"
                      : "plan_card"
                  }
                >
                  <div className="upper_plan_card">
                    <Image
                      src={item.icon}
                      alt="plan_images"
                      className="plan_images"
                      placeholder="blur"
                    />
                    <p className="plan_card_header">{item.header}</p>
                    <p className="plan_subheader">{item.Subheader}</p>
                  </div>
                  <div className="plan_content">
                    {item.points.map((data) => {
                      return (
                        <div className="tick_sen">
                          <Tick />
                          <p className="sentence_">{data}</p>
                        </div>
                      );
                    })}
                  </div>
                  <p className="line"></p>
                  <div className="pricing_wrapper">
                    <p className="price_">
                      {item.price}
                      <span
                        style={{
                          color: "#4c3347",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        /Month
                      </span>
                    </p>
                    <Button name={"Book A Session"} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
