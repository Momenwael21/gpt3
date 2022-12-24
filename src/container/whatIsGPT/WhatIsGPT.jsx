import React from "react";
import "./whatIsGPT.css";
import { Articles } from "../../components/index";

const WhatIsGPT = () => {
  return (
    <div className="whatGPT">
      <div className="container">
        <div className="sec-body">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <h5 className="main-title">What is GPT-3</h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p className="main-desc">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
          <div className="row row2">
            <div className="col-sm-12 col-md-6">
              <h1 className="possiblities-intro">
                The possibilities are beyond your imagination
              </h1>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>Explore The Library</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Articles
                from={"what-gpt"}
                title={"Chatbots"}
                body={
                  "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Articles
                from={"what-gpt"}
                title={"Knowledgebase"}
                body={
                  "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                }
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Articles
                from={"what-gpt"}
                title="Education"
                body={
                  "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsGPT;
