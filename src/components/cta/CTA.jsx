import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta">
      <div className="container">
        <div className="subscribe">
          <div className="desc">
            <p className="title">Request Early Access to Get Started </p>
            <h4 className="body">
              Register today & start exploring the endless possiblities.
            </h4>
          </div>
          <a className="btn rounded-pill" href="/#">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
