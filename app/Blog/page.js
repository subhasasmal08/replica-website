"use client";
import React, { Component } from "react";
import "./blog.scss";
import Footer from "../component/Footer/Footer";
import { Arrow } from "../page";
import Image from "next/image";
import { Clock } from "../SingleBlog/page";
import mindfullness from "../../public/assets/Images/mindfullness.jpg";
import worklife from "../../public/assets/Images/worklife.jpg";
import BigStar from "../../public/assets/Images/Bigstar.png";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

class Child extends Component {
  renderBlogCards = [
    {
      image: mindfullness,
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: worklife,
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: mindfullness,
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: worklife,
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
  ];
  render() {
    return (
      <div className="blog_wrapper">
        <div className="blog_top_wrapper">
          <div className="blog_header_wrapper">
            <Image
              src={BigStar}
              alt="BigStar"
              className="bigstar_image"
              placeholder="blur"
            />
            <h2 className="blog_header">Blogs</h2>
            <Image
              src={BigStar}
              alt="smallStar"
              className="smallstar_image"
              placeholder="blur"
            />
          </div>

          <p className="blog_content">Stay update about blog and article</p>
        </div>
        <div className="blog_subwrapper">
          <div className="lhs">
            {this.renderBlogCards.map((item) => {
              return (
                <div className="related_posts_card">
                  <Image
                    src={item.image}
                    alt="related"
                    className="related_image"
                    placeholder="blur"
                  />
                  {/* <p
                    onClick={() => {
                      // this.props.router.replace("/SingleBlog", "subha", {
                      // });
                      this.props.router.push("/SingleBlog", { data: item });
                    }}
                    className="header_"
                  >
                    {item.header}
                  </p> */}

                  <Link
                    href={{
                      pathname: "/SingleBlog",
                      query: {
                        data: item.header.replaceAll(" ", "_"),
                      },
                    }}
                    className="header_"
                  >
                    {item.header}
                  </Link>

                  <p className="date_">
                    <Clock className="clock_" />
                    {item.date}
                  </p>
                  <p className="content_">{item.content}</p>
                  <div className="read_more_">
                    Read more
                    <Arrow className="arrow_" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rhs">
            <div className="search_block">
              <input placeholder="Search..." className="search_" />
              <Search className="search_icon" />
            </div>
            <div className="categories_wrapper">
              <p className="category_">Categories</p>
              {["Lifestyle", "Career", "Business"].map((item) => {
                return <p className="category_types">{item}</p>;
              })}
            </div>
            <div className="latest_posts_wrapper">
              <p className="latest_">Latest posts</p>
              {this.renderBlogCards.map((item) => {
                return (
                  <div className="posts_card">
                    <Image
                      src={item.image}
                      alt="posts"
                      className="post_image"
                      placeholder="blur"
                    />
                    <div className="posts_content">
                      <p className="header_">{item.header}</p>
                      <p className="date_">
                        <Clock className="clock_" /> {item.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    );
  }
}

const Page = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  return <Child {...props} router={router} pathname={pathname} />;
};

export default Page;

const Search = (props) => (
  <svg
    fill="#000000"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.9994165,16.2923098 L20.8535534,20.1464466 C21.0488155,20.3417088 21.0488155,20.6582912 20.8535534,20.8535534 C20.6582912,21.0488155 20.3417088,21.0488155 20.1464466,20.8535534 L16.2923098,16.9994165 C14.8819612,18.2444908 13.0292099,19 11,19 C6.581722,19 3,15.418278 3,11 C3,6.581722 6.581722,3 11,3 C15.418278,3 19,6.581722 19,11 C19,13.0292099 18.2444908,14.8819612 16.9994165,16.2923098 Z M11,18 C14.8659932,18 18,14.8659932 18,11 C18,7.13400675 14.8659932,4 11,4 C7.13400675,4 4,7.13400675 4,11 C4,14.8659932 7.13400675,18 11,18 Z" />
  </svg>
);
