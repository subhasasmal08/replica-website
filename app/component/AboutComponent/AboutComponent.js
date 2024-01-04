import React, { Component } from "react";
import Image from "next/image";
import "./aboutcomponent.scss";
import about from "../../../public/assets/Images/about.jpg";
import lineround from "../../../public/assets/Images/Line-round.png";
import blob from "../../../public/assets/Images/Blob.png";
import Button from "../Button/Button";

export default class AboutComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderCountDivData: [
        { name: "persons_mentored", number: 10 },
        { name: "seminar_speaker", number: 20 },
        { name: "coaching_certificates", number: 50 },
      ],
      count: 0,
    };
  }

  componentDidMount() {
    const element = document.querySelector(".about_me_");
    const observer = new IntersectionObserver((entries) => {
      element.classList.toggle("in-left", entries[0].isIntersecting);
    });
    observer.observe(element);

    const element_right = document.querySelector(".description_header");
    const observer_right = new IntersectionObserver((entries) => {
      element_right.classList.toggle("in-right", entries[0].isIntersecting);
    });
    observer_right.observe(element_right);

    // this.state.renderCountDivData.map((item, idx) => {
    //   var i = 0;
    //   setInterval(function () {
    //     if (i == item.number) {
    //       clearInterval(this);
    //     } else {
    //       let _data = [...this.state.renderCountDivData];
    //       _data[idx].number = i++;
    //       this.setState({ renderCountDivData: [..._data] });
    //       console.log("Currently at " + i++);
    //     }
    //   }, 10);
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const id = setInterval(
        () =>
          this.setState((prevState) => ({
            count: prevState + 1,
          })),
        10
      );

      return () => {
        clearInterval(id);
      };
    }
  }

  counter(num) {
    console.log(num);
    // let number = 0;
    // var i = 0;
    // setInterval(function () {
    //   if (i == num) clearInterval(this);
    //   else {
    //     console.log("Currently at " + i++);
    //   }
    // }, 100);
  }

  render() {
    return (
      <div className="home_page_about">
        <div className="home_page_about_lhs">
          <h2 className="about_me_ ">About Me</h2>
          <div className="count_wrapper">
            {console.log(this.state.count)}
            {/* <h2 className="count_">{this.state.count}</h2> */}
            {this.state.renderCountDivData.map((item) => {
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
          <Button name={"Read more"} />
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
