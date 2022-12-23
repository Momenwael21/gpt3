import React from "react";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
import "./companies.css";

export const Companies = () => {
  return (
    <div className="companies">
      <div className="container">
        <img src={google} alt="company_logo" />
        <img src={slack} alt="company_logo" />
        <img src={atlassian} alt="company_logo" />
        <img src={dropbox} alt="company_logo" />
        <img src={shopify} alt="company_logo" />
      </div>
    </div>
  );
};

export default Companies;
