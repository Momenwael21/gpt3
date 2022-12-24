import React from "react";
import illustraion from "../../assets/Header_Illustration.webp";
import user1 from "../../assets/Ellipse 31.png";
import user2 from "../../assets/Ellipse 32.png";
import user3 from "../../assets/Ellipse 33.png";
import user4 from "../../assets/Ellipse 34.png";
import user5 from "../../assets/Ellipse 35.png";
import user6 from "../../assets/Ellipse 36.png";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="home-desc">
              <h1 className="title">
                Let's Build Something amazing with GPT-3 OpenAI
              </h1>
              <p className="desc">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              <div className="subscribe">
                <form className="email" onSubmit={(e) => e.defaultPrevented}>
                  <input type="email" placeholder="Your Email Address" id="" />
                  <button type="submit">Get Started</button>
                </form>
                <div className="users">
                  <div className="photos">
                    <img className="user1" src={user1} alt="user_photo" />
                    <img className="user2" src={user2} alt="user_photo" />
                    <img className="user3" src={user3} alt="user_photo" />
                    <img className="user4" src={user4} alt="user_photo" />
                    <img className="user5" src={user5} alt="user_photo" />
                    <img className="user6" src={user6} alt="user_photo" />
                    <p className="reqs">1.6k+</p>
                  </div>
                  <p className="reqs-title">
                    1,600 people requested access a visit in last 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="illustraion">
              <img src={illustraion} alt="illustraion_ai" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
