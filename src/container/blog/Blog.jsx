import React from "react";
import "./blog.css";
import { BlogCard } from "../../components/index";
import cardM from "../../assets/card-main.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1 className="blog-title">
              A lot is happening, We are blogging about it.
            </h1>
          </div>
        </div>
        <div className="row content">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <BlogCard image={cardM} type="main" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <BlogCard image={card1} type="second" />
            <BlogCard image={card2} type="second" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <BlogCard image={card3} type="second" />
            <BlogCard image={card4} type="second" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
