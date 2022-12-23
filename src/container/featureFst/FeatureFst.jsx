import React from "react";
import Articles from "../../components/Articles/Articles";
import "./featureFst.css";

const FeatureFst = () => {
  return (
    <div className="features1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h1 className="title">
              The Future is Now and You Just Need To Realize It. Step into
              Future Today & Make it Happen.
            </h1>
            <p className="desc">Request Early Access to Get Started</p>
          </div>
          <div className="col-sm-12 col-md-8">
            <Articles
              title={"Improving end distrusts instantly "}
              body={
                "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
              }
              from={"feat1"}
            />
            <Articles
              title={"Become the tended active "}
              body={
                "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
              }
              from={"feat1"}
            />
            <Articles
              title={"Message or am nothing "}
              body={
                "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
              }
              from={"feat1"}
            />
            <Articles
              title={"Really boy law county "}
              body={
                "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
              }
              from={"feat1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureFst;
