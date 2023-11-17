import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import Bg from "../../../public/assets/Images/Bg-6.png";
import { Quotes } from "@/app/page";
import "./reviewcomponent.scss";
import { Down } from "../Navbar/Navbar";

export default function ReviewComponent() {
  const renderReviewData = [
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Cintya Hiott",
      role: "Entrepreneur",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    ",
    },
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Linda honoy",
      role: "CEO",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Robie Doe",
      role: "Marketing",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    ",
    },
    {
      icon: "https://source.unsplash.com/random/200x200?sig=1",
      name: "Elisa Velis",
      role: "Manager",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    ",
    },
  ];

  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isOverflowY();
    }, 200);
  }, [renderReviewData]);

  const isOverflowY = () => {
    let element = document.getElementById("review_");
    if (!element) return false;
    return setOverflow(
      element.scrollWidth !== Math.max(element.offsetWidth, element.clientWidth)
    );
  };

  const sideScroll = (direction, speed, distance, step) => {
    let element = document.getElementById("review_");
    let scrollAmount = 0;
    var slideTimer = setInterval(() => {
      if (direction === "left") {
        element.scrollLeft -= step;
        document.getElementById("review_" + "_next").style.display = "grid";
        if (
          Math.abs(element.scrollWidth - element.clientWidth) ===
          Math.abs(
            element.scrollWidth - element.clientWidth - element.scrollLeft
          )
        ) {
          document.getElementById("review_" + "_prev").style.display = "none";
        }
      } else {
        element.scrollLeft += step;
        if (
          Math.abs(
            element.scrollWidth - element.clientWidth - element.scrollLeft
          ) <= 5
        ) {
          document.getElementById("review_" + "_next").style.display = "none";
        }
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  const carouselItems = document.querySelectorAll(".slider_wrapper");
  let i = 1;

  setInterval(() => {
    // Accessing All the carousel Items
    Array.from(carouselItems).forEach((item, index) => {
      if (i < carouselItems.length) {
        item.style.transform = `translateX(-${i * 100}%)`;
      }
    });

    if (i < carouselItems.length) {
      i++;
    } else {
      i = 0;
    }
  }, 2000);

  return (
    <div className="home_page_review_section">
      {console.log(overflow)}
      <div style={{ objectFit: "contain" }}>
        <Image src={Bg} alt="Bg" className="Bg" placeholder="blur" />
      </div>
      <div className="review_subwrapper">
        <div className="review_lhs">
          <h2 className="review_header">
            What <span style={{ color: "#C267D1" }}>They Say</span>
          </h2>
          <p className="review_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="review_slider" id="review_">
          {renderReviewData.map((data) => {
            return (
              <div className="slider_wrapper">
                <div className="slider_upper_wrapper">{data.content}</div>
                <div className="slider_lower_wrapper">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <img className="review_pic" src={data.icon}></img>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <span className="name_">{data.name}</span>
                      <span className="role_">{data.role}</span>
                    </div>
                  </div>
                  <Quotes className="quotes_" />
                </div>
              </div>
            );
          })}
        </div>
        {overflow && (
          <div className="slider_arrows">
            <div
              className="slide_ prev"
              id={"review_" + "_prev"}
              onClick={() => sideScroll("left", 10, 320, 10)}
            >
              {console.log("first")}
              <Left className="drop_icon" />
            </div>
            <div
              className="slide_"
              id={"review_" + "_next"}
              onClick={() => {
                sideScroll("right", 10, 320, 10);
                document.getElementById("review_" + "_prev").style.display =
                  "grid";
              }}
            >
              <Right className="drop_icon" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Right = (props) => (
  <svg
    fill="#C267D1"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    id="right"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <path
      id="primary"
      d="M21.71,11.29l-7-7a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,11.29Z"
      style={{
        fill: "#C267D1",
      }}
    />
  </svg>
);

const Left = (props) => (
  <svg
    fill="#C267D1"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    id="left"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    {...props}
  >
    <path
      id="primary"
      d="M21,11H5.41l5.3-5.29A1,1,0,1,0,9.29,4.29l-7,7a1,1,0,0,0,0,1.42l7,7a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"
      style={{
        fill: "#C267D1",
      }}
    />
  </svg>
);
