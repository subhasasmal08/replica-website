import {
  Arrow,
  Direction,
  GrowthCareer,
  ProblemSolving,
  StressControl,
} from "@/app/page";
import React, { Component } from "react";
import Image from "next/image";
import provide from "../../../public/assets/Images/provide.jpg";
import "./providecomponent.scss";
import passion from "../../../public/assets/Images/passion.png";
import stress from "../../../public/assets/Images/stress.png";
import problem from "../../../public/assets/Images/problem.png";
import growth from "../../../public/assets/Images/growth.png";
import relationships from "../../../public/assets/Images/relationships.png";
import life from "../../../public/assets/Images/life.png";

export default class ProvideComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderProvideData: [],
    };
  }
  componentDidMount() {
    console.log(this.props.type);
    this.props.type === "service"
      ? this.setState({
          renderProvideData: [
            {
              header: "Identifying Passion",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: passion,
            },
            {
              header: "Stress Control",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: stress,
            },
            {
              header: "Problem Solving",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: problem,
            },
            {
              header: "Growth Career",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: growth,
            },
            {
              header: "Relationships",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: relationships,
            },
            {
              header: "Life Balance",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: life,
            },
          ],
        })
      : this.setState({
          renderProvideData: [
            {
              header: "Identifying Passion",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: passion,
            },
            {
              header: "Stress Control",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: stress,
            },
            {
              header: "Problem Solving",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: problem,
            },
            {
              header: "Growth Career",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
              icon: growth,
            },
          ],
        });
  }

  render() {
    return (
      <div
        style={{
          maxWidth: this.props.type !== "home_service" ? "1140px" : "none",
          paddingLeft: this.props.type !== "home_service" ? "none" : "100px",
        }}
        className="home_page_provide"
      >
        <div className="home_page_provide_lhs">
          <div
            className="upper_"
            style={{
              display: this.props.type === "service" && "flex",
              justifyContent: this.props.type === "service" && "center",
              flexDirection: this.props.type === "service" && "column",
              alignItems: this.props.type === "service" && "center",
            }}
          >
            <h2 className="upper_header">
              What I <span style={{ color: "#F49785" }}>Provide</span>
            </h2>
            <div
              style={{
                textAlign: this.props.type === "home_service" && "left",
              }}
              className="provide_desc"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam ut porttitor leo.
            </div>
          </div>
          <div
            className="lower_"
            style={{
              justifyContent:
                this.props.type === "service" ? "space-between" : "flex-start",
              gap: this.props.type === "home_service" && "10px",
            }}
          >
            {this.state.renderProvideData.map((item) => {
              return (
                <div className="provide_cards">
                  <div style={{ height: "100%" }}>
                    <Image
                      src={item.icon}
                      alt="provide_images"
                      className="provide_images"
                      placeholder="blur"
                    />
                  </div>
                  <div className="provide_cards_wrapper">
                    <p className="provide_header">{item.header}</p>
                    <div className="provide_content">{item.desc}</div>
                    <div className="read_more_">
                      Read more
                      <Arrow />{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {this.props.type === "home_service" && (
          <div className="home_page_provide_rhs">
            <Image
              src={provide}
              alt="provide"
              className="provide_image"
              placeholder="blur"
            />
            <div className="image_"></div>
          </div>
        )}
      </div>
    );
  }
}

const Relationship = (props) => (
  <svg
    baseProfile="tiny"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="-63 65 128 128"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M-43.2,72.6c0.2,0.4,0.5,0.7,0.8,1c2,2,5.3,2,7.3,0c0.3-0.3,0.6-0.6,0.8-1c1.8-3.1,5.1-5.2,9-5.2c5.8,0,10.4,4.7,10.4,10.4 c0,5.8-4.7,10.4-10.4,10.4C-34.4,88.2-41.9,81.5-43.2,72.6z M-3.2,102C-4.1,95.7-9.5,90.9-16,90.9h-19.8c-6.5,0-11.9,4.8-12.8,11.1 l-3.9,32.9c-0.3,2.5,1.5,4.7,4,5c2.5,0.3,4.7-1.5,5-4l3.6-30.6c0.1-0.6,0.6-1.1,1.3-1.1c0.7,0,1.3,0.6,1.3,1.3c0,0.1,0,0.2,0,0.2 s-2.7,21.7-2.7,22.1c-0.1,0.6-0.1,1.2-0.1,1.7v55.1c0,3.9,2.9,7,6.5,7c3.6,0,6.5-3.1,6.5-7V140c0-0.7,0.6-1.3,1.3-1.3 s1.3,0.6,1.3,1.3v44.8c0,3.9,2.9,7,6.5,7s6.5-3.1,6.5-7v-55.2c0-0.5,0-1.2-0.1-1.7c-0.1-0.4-2.7-22.1-2.7-22.1s0-0.1,0-0.2 c0-0.7,0.6-1.3,1.3-1.3c0.6,0,1.1,0.5,1.3,1.1l3.6,30.6c0.3,2.5,2.5,4.3,5,4c2.3-0.4,4.1-2.6,3.8-5.1L-3.2,102z M27.8,88.2 c9.1,0,16.6-6.7,17.9-15.5c-0.2,0.4-0.5,0.7-0.8,1c-2,2-5.3,2-7.3,0c-0.3-0.3-0.6-0.6-0.8-1c-1.8-3.1-5.2-5.2-9-5.2 c-5.7,0-10.4,4.6-10.4,10.4C17.5,83.6,22.1,88.2,27.8,88.2z M55,134.9l-4-33c-0.9-6.3-6.3-11.1-12.8-11.1H18.5 c-6.5,0-11.9,4.8-12.8,11.1l-3.9,32.9c-0.3,2.5,1.5,4.7,4,5s4.7-1.5,5-4l3.6-30.6c0.1-0.6,0.6-1.1,1.3-1.1s1.3,0.6,1.3,1.3 c0,0.1,0,0.2,0,0.2s-2.7,21.7-2.7,22.1c-0.1,0.6-0.1,1.2-0.1,1.7v55.1c0,3.9,2.9,7,6.5,7s6.5-3.1,6.5-7V140c0-0.7,0.6-1.3,1.3-1.3 s1.3,0.6,1.3,1.3v44.8c0,3.9,2.9,7,6.5,7c3.6,0,6.5-3.1,6.5-7v-55.2c0-0.5,0-1.2-0.1-1.7c-0.1-0.4-2.7-22.1-2.7-22.1s0-0.1,0-0.2 c0-0.7,0.6-1.3,1.3-1.3c0.6,0,1.1,0.5,1.3,1.1l3.6,30.6c0.3,2.5,2.5,4.3,5,4C53.5,139.6,55.3,137.4,55,134.9z" />
  </svg>
);

const LifeBalance = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="40px"
    height="40px"
    viewBox="0 0 511.998 511.998"
    style={{
      enableBackground: "new 0 0 511.998 511.998",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <circle cx={264.358} cy={55.54} r={42.502} />
      </g>
    </g>
    <g>
      <g>
        <path d="M418.946,203.093c-9.346-5.34-21.253-2.092-26.593,7.255c-3.145,5.504-3.291,11.889-0.987,17.305l-3.069,5.372 l-29.226-30.973l-24.156-74.089c-2.414-7.404-8.961-12.298-16.251-12.975v-0.267h-94.239c-0.222-0.096-0.431-0.208-0.659-0.297 L166.9,92.138l-4.832-55.134l10.35,0.042c3.541,4.701,9.143,7.764,15.484,7.791c10.765,0.043,19.527-8.647,19.57-19.411 c0.043-10.765-8.647-19.527-19.412-19.57c-6.339-0.026-11.968,2.992-15.546,7.664l-12.904-0.052 c-2.524-8.414-10.677-14.185-19.774-13.396c-7.886,0.692-14.208,6.129-16.418,13.25l-5.138-0.021 c-3.541-4.701-9.143-7.765-15.484-7.791c-10.763-0.045-19.526,8.646-19.57,19.41c-0.044,10.765,8.647,19.527,19.412,19.57 c6.339,0.025,11.968-2.992,15.546-7.664l5.879,0.023l6.159,70.278c0.628,7.159,5.256,13.345,11.947,15.966l67.787,26.565 c0.032,0.013,0.065,0.021,0.099,0.033v132.598l-46.906,199.465c-3.11,13.228,5.091,26.474,18.319,29.585 c13.235,3.11,26.475-5.095,29.585-18.319l47.575-202.305h11.464l47.575,202.305c3.11,13.226,16.352,21.429,29.585,18.319 c13.229-3.111,21.43-16.357,18.319-29.585L318.664,282.29v-82.082l5.74,17.608c0.866,2.657,2.31,5.089,4.228,7.121l40.04,42.435 l-4.21,7.369c-5.836,0.765-11.261,4.133-14.406,9.638c-5.34,9.346-2.092,21.253,7.255,26.593 c9.346,5.34,21.253,2.092,26.593-7.255c3.145-5.504,3.291-11.889,0.987-17.305l2.415-4.227c6.139,1.285,12.386-0.51,16.88-4.749 c7.523-7.1,7.929-18.9,0.98-26.51l6.629-11.603c5.836-0.765,11.261-4.134,14.406-9.638 C431.541,220.339,428.292,208.434,418.946,203.093z" />
      </g>
    </g>
  </svg>
);
