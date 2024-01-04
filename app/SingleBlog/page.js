"use client";
import React, { Component, useRef } from "react";
import Footer from "../component/Footer/Footer";
import "./singleblog.scss";
import Image from "next/image";
import mindfullness from "../../public/assets/Images/mindfullness.jpg";
import worklife from "../../public/assets/Images/worklife.jpg";
import { Insta, Twitter, Youtube } from "../component/Navbar/Navbar";
import { usePathname, useRouter } from "next/navigation";
import Button from "../component/Button/Button";
import emailjs from "@emailjs/browser";
import { notify } from "../layout";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeBlog: {
        picture: mindfullness,
        header: "Mind Mapping for Mindfulness",
        date: "NOVEMBER 5, 2021",
        content: "",
      },
    };
  }
  realtedPostData = [
    {
      picture: mindfullness,
      header: "Mind Mapping for Mindfulness",
      date: "NOVEMBER 5, 2021",
    },
    {
      picture: worklife,
      header: "Life work balance",
      date: "NOVEMBER 5, 2021",
    },
  ];

  componentDidMount() {
    let searchParam = window.location.search;
    console.log(searchParam);
    if (searchParam !== "") {
      this.setState({
        activeBlog: {
          picture: mindfullness,
          header: searchParam.split("=")[1].replaceAll("_", " "),
          date: "NOVEMBER 5, 2021",
          content: "",
        },
      });
    }
  }

  sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    // console.log(this.props.ref.current);
    console.log("sendEmail");
    emailjs
      .sendForm(
        "service_j64f6lg",
        "template_m6t2sri",
        this.props.form.current,
        "_qkp45k05hE92TgB9"
      )
      .then(
        (result) => {
          console.log(result);
          notify({
            type: "success",
            msg: "comment added successfully!",
          });
          // show the user a success message
        },
        (error) => {
          console.log(error);
          notify({
            type: "error",
            msg: "Something went wrong!",
          });
          // show the user an error
        }
      );
  };
  render() {
    return (
      <div className="single_blog_wrapper">
        <div className="single_blog_subwrapper">
          <div className="mind_wrapper">
            {console.log(this.state.activeBlog)}
            <h2 id="single_blog" className="header_">
              {this.state.activeBlog.header}
            </h2>
            <div className="date_wrapper">
              <Clock />
              <p className="date_">{this.state.activeBlog.date}</p>
            </div>
            <Image
              src={this.state.activeBlog.picture}
              alt="Mindfullness"
              className="Mindfullness_image"
              placeholder="blur"
            />
            <div className="desc_">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae.
              </p>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione
              </p>
            </div>
            <div className="media_wrapper">
              <p className="tags_">
                Tags : <span style={{ color: "#F49785" }}>Lifestyle</span>
              </p>
              <div className="social_media_wrapper">
                <p>Share This Post:</p>
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
                    onClick={() =>
                      window.open("https://www.youtube.com/", "_blank")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
          <div className="related_posts_wrapper">
            <h2 className="header_">Related Post</h2>
            <div className="posts_subwrapper">
              {this.realtedPostData.map((item) => {
                return (
                  <div className="related_posts_card">
                    <Image
                      src={item.picture}
                      alt="related"
                      className="related_image"
                      placeholder="blur"
                    />
                    <a
                      href="#single_blog"
                      onClick={() => {
                        this.setState({
                          activeBlog: {
                            picture: item.picture,
                            header: item.header,
                            date: item.date,
                            content: "",
                          },
                        });
                      }}
                      className="header_"
                    >
                      {item.header}
                    </a>
                    <p className="date_">
                      <Clock className="clock_" />
                      {item.date}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="divider"></div>
          </div>
          <form
            className="reply_wrapper"
            ref={this.props.form}
            onSubmit={this.sendEmail}
          >
            <h2 className="header_">Leave a Reply</h2>
            <p className="subheader_">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="input_wrapper">
              <label req={"*"}>Comment </label>
              <textarea
                style={{ height: "150px" }}
                className="input_"
                name="comment"
              />
            </div>
            <div className="input_wrapper">
              <label req={"*"}>Name </label>
              <input className="input_" name="name" />
            </div>
            <div className="input_wrapper">
              <label req={"*"}>Email </label>
              <input className="input_" name="email" />
            </div>
            <div className="input_wrapper">
              <label>Website </label>
              <input className="input_" name="website" />
            </div>
            <div className="checkbox_wrapper">
              <input type="checkbox" />
              <p className="desc_">
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <input className="submit_btn" type="submit" value="Post Comment" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const Page = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const form = useRef();

  return <Child {...props} router={router} pathname={pathname} form={form} />;
};

export default Page;

export const Clock = (props) => (
  <svg
    fill="#000000"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15.7906191,14.0931333 C16.0153254,14.2536378 16.0673712,14.5659128 15.9068667,14.7906191 C15.7463622,15.0153254 15.4340872,15.0673712 15.2093809,14.9068667 L11.7093809,12.4068667 C11.6156592,12.3399227 11.5479226,12.2426753 11.5176181,12.1315587 L10.0176181,6.6315587 C9.94496022,6.36514653 10.1020291,6.09027595 10.3684413,6.01761809 C10.6348535,5.94496022 10.909724,6.10202912 10.9823819,6.3684413 L12.4355266,11.6966387 L15.7906191,14.0931333 Z" />
  </svg>
);
