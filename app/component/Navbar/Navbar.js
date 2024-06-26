"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { Component } from "react";
import "../Navbar/navbar.scss";
import Image from "next/image";
import logo from "../../../public/assets/Images/Logo_Lyfes-3-01.png";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  navbarArr = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Services",
      link: "/Services",
    },
    {
      name: "Pages",
      link: "",
    },
    {
      name: "Blog",
      link: "",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
  ];

  pagesDD = ["Our  Plans", "Appointments", "FAQ", "404 Page"];
  render() {
    return (
      <nav className="navbar">
        <div className="navbar_subwrapper">
          <Image src={logo} alt="logo" className="logo" placeholder="blur" />
          <ul className="navbar_ul">
            {this.navbarArr.map((item) => (
              <li
                key={item.link}
                className={
                  this.props.pathname === item.link
                    ? "active navbar_title"
                    : "navbar_title"
                }
                // style={{ color: active === item.name && "active" }}
              >
                <div
                  className={
                    item.name === "Pages"
                      ? "navbar_title pages_hover"
                      : this.props.pathname === item.link
                      ? "active navbar_title"
                      : "navbar_title"
                  }
                  href={item.link}
                  style={{ textDecoration: "none" }}
                  onClick={() => this.props.router.push(item.link)}
                >
                  {console.log(item.link, this.props.pathname)}

                  <div
                    className={
                      item.name === "Pages"
                        ? "navbar_tag page_tag"
                        : item.name === "Blog"
                        ? "navbar_tag blog_tag"
                        : "navbar_tag"
                    }
                  >
                    {item.name}
                    <div class="dd_pages">
                      {this.pagesDD.map((item) => {
                        return (
                          <p
                            className="plans"
                            onClick={(e) => {
                              e.stopPropagation();
                              item === "404 Page" &&
                                this.props.router.push("/Pages");
                              item === "Our  Plans" &&
                                this.props.router.push("/Pages/Plans");
                            }}
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                    <div class="dd_blog">
                      {["Blog", "Single Blog"].map((item) => {
                        return (
                          <p
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log(item);
                              if (item === "Blog") {
                                this.props.router.push("/Blog");
                              } else {
                                this.props.router.push("/SingleBlog");
                              }
                            }}
                            className="blogs"
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {(item.name === "Pages" || item.name === "Blog") && (
                  <Down className="down_icon" />
                )}
              </li>
            ))}
          </ul>
          <div className="social_media_icons">
            <Insta
              className="insta"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/accounts/login/",
                  "_blank"
                )
              }
            />
            <Twitter
              className="twitter"
              onClick={() =>
                window.open("https://twitter.com/i/flow/login", "_blank")
              }
            />
            <Youtube
              className="youtube"
              onClick={() => window.open("https://www.youtube.com/", "_blank")}
            />
          </div>
        </div>
      </nav>
    );
  }
}

const Page = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  return <Child {...props} router={router} pathname={pathname} />;
};

export default Page;

export const Insta = (props) => (
  <svg
    fill="#383740"
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}
  >
    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
  </svg>
);

export const Twitter = (props) => (
  <svg
    fill="#383740"
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}
  >
    <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
  </svg>
);

export const Youtube = (props) => (
  <svg
    fill="#383740"
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}
  >
    <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
  </svg>
);
export const FaceBook = (props) => (
  <svg
    fill="#000000"
    width="16px"
    height="16px"
    viewBox="-3 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    {...props}
  >
    <path d="M12.538 9.62a6.038 6.038 0 1 0-6.981 5.964v-4.22H4.023V9.62h1.534V8.29a2.13 2.13 0 0 1 2.28-2.349 9.285 9.285 0 0 1 1.352.118v1.486h-.762a.873.873 0 0 0-.984.943V9.62h1.675l-.268 1.746H7.443v4.22a6.04 6.04 0 0 0 5.095-5.966z" />
  </svg>
);

export const Down = (props) => (
  <svg
    width="24px"
    height="24px"
    fill="#383740"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g data-name="Layer 2">
      <g data-name="arrow-ios-downward">
        <rect width={24} height={24} opacity={0} />
        <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" />
      </g>
    </g>
  </svg>
);
