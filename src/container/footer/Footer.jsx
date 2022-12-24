import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="intro">
          <h1 className="title">
            Do you want to step in to the future before otherss
          </h1>
          <a href="mailto:waelmomen42@gmail.com" className="request">
            <p> Request Early Access</p>
          </a>
        </div>
        <div className="more-links">
          <div className="row">
            <div className="main-brand col-sm-12 col-md-6 col-lg-6">
              <h1 className=" brand">GPT-3</h1>
              <p>
                Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
              </p>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-2">
              <div className="columns links-col">
                <p className="col-head">Links</p>
                <a href="/#">Overons</a>
                <a href="/#">Social Media</a>
                <a href="/#">Counters</a>
                <a href="/#">Contact</a>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-2">
              <div className="columns company-col">
                <p className="col-head">Company</p>
                <a href="/#">Terms & Conditions</a>
                <a href="/#">Privacy Policy</a>
                <a href="/#">Contact</a>
              </div>
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-2">
              <div className="columns links-col">
                <p className="col-head">Links</p>
                <a href="/#">Overons</a>
                <a href="/#">Social Media</a>
                <a href="/#">Counters</a>
                <a href="/#">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p>&copy; 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
