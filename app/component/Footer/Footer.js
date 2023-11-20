import React, { Component, useRef } from "react";
import Image from "next/image";
import { Insta, Twitter, Youtube } from "../Navbar/Navbar";
import logo from "../../../public/assets/Images/Logo_Lyfes-3-01.png";
import Bg1 from "../../../public/assets/Images/Bg-1.png";
import "./footer.scss";
import Button from "../Button/Button";
import { notify } from "@/app/layout";

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }
  apiKey = "90cd554ab24346c2a8f6902773d44b83";
  apiURL = "https://emailvalidation.abstractapi.com/v1/?api_key=" + this.apiKey;
   sendEmailValidationRequest = async (email) => {
    try {
        const response = await fetch(this.apiURL + '&email=' + email);
        const data = await response.json();
        const isValidSMTP = data.is_smtp_valid.value;

        if (isValidSMTP) {
          this.setState({email : data.email})
          console.log(data)
            // use the email address in the mailto link
        } else {
            // show the user an error
        }
    } catch (error) {
        throw error;
    }
}
  

  render() {
    return (
      <div className="footer">
        <Image src={Bg1} alt="Bg1" className="Bg1" placeholder="blur" />
        <div className="contact_wrapper">
          <p className="subscribe_">Subscribe to newsletter</p>
          <p className="notify_">Get notified for our latest news and offers</p>
          <div className="input_">
            {console.log(this.props.ref)}
            <input
              ref={this.props.ref}
              className="email_input"
              placeholder="Your email address"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
            
            <Button
              onClick={() => {
                this.sendEmailValidationRequest(this.state.email)
                  // this.setState({ email: "" });
              }}
              name={"Subscribe Now"}
            />
          </div>
        </div>

        <div className="upper_footer">
          <div className="lhs_footer_wrapper">
            <p>Connect</p>
            <p>Jalan Batu Mejan, Canggu, Badung Regency, Bali</p>
            <p>(+62) 8123 456 789</p>
            <p>support@domain.com</p>
          </div>
          <div className="mid_footer_wrapper">
            <Image src={logo} alt="logo" className="logo" placeholder="blur" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus.
            </p>
            <div className="social_media_icons">
              <div className="media_container">
                <Insta className="insta" />
              </div>
              <div className="media_container">
                <Twitter className="twitter" />
              </div>
              <div className="media_container">
                <Youtube className="youtube" />
              </div>
            </div>
          </div>
          <div className="rhs_footer_wrapper">
            <p>Navigation</p>
            <p>About</p>
            <p>Service</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="lower_footer">
          <p>Lyfes Template Kit by Jegtheme</p>
          <p>Copyright © 2021. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

const Page = (props) => {
  const ref = useRef();
  return <Child {...props} ref={ref} />;
};

export default Page;
