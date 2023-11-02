import { Arrow } from "@/app/page";
import React, { Component } from "react";
import "./blogcomponent.scss";
import { Clock } from "@/app/SingleBlog/page";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "subha",
    };
  }
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
                    <Clock /> {item.date}
                  </p>
                  <p className="content_">{item.content}</p>
                  {/* <div
                    className="read_more_"
                    onClick={() => {
                      this.props.router.push("/SingleBlog");
                    }}
                  >
                    Read more
                    <Arrow />
                  </div> */}
                  <Link
                    href={{
                      pathname: "/SingleBlog",
                      query: {
                        data: item.header.replaceAll(" ", "_"),
                      },
                    }}
                    className="read_more_"
                  >
                    Read more
                    <Arrow />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
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
