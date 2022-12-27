import React from "react";
import manVR from "../../assets/vr.png";
import { BsChatLeftText } from "react-icons/bs";
import { RiMoreFill } from "react-icons/ri";

const FeatureSec = () => {
  return (
    <section id="openAI" className="features2">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="art">
              <img src={manVR} alt="man_with_vr" />
              <div className="rectangle"></div>
              <div className="floats">
                <div className="chat">
                  <BsChatLeftText />
                </div>
                <div className="more">
                  <RiMoreFill />
                  <p>More Apps</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="desc">
              <p>Request Early Access to Get Started</p>
              <h1 className="title">
                The possibilities are beyond your imagination
              </h1>
              <p className="desc-body">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              <p>Request Early Access to Get Started</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSec;
