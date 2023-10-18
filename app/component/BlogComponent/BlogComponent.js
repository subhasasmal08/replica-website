import { Arrow } from "@/app/page";
import React, { Component } from "react";
import "./blogcomponent.scss";
import { Clock } from "@/app/SingleBlog/page";

export default class BlogComponent extends Component {
  renderBlogCards = [
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
    {
      image: "https://source.unsplash.com/random/200x200?sig=1",
      header: "How we accept failure",
      date: "November 5, 2020",
      content:
        "loremj jhAd madgaidad ushdkja ha dajdjhuadb bzjddflks fdhnz dgziuhdzudiyiufns fuhds fiuihsf dfiusfsbfjhbz dzyu gaa auweyuia yj eahueui e8yq",
    },
  ];
  render() {
    return (
      <div className="home_page_blog">
        <div className="blog_wrapper">
          <h2 className="blog_header">
            Latest <span style={{ color: "#C267D1" }}>Blog</span>
          </h2>
          <p className="subheader">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="blog_cards_wrapper">
            {this.renderBlogCards.map((item) => {
              return (
                <div className="blog_card">
                  <img src={item.image} className="blog_image"></img>
                  <p className="header_">{item.header}</p>
                  <p className="date_">
                    <Clock /> {item.date}
                  </p>
                  <p className="content_">{item.content}</p>
                  <div className="read_more_">
                    Read more
                    <Arrow />
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
