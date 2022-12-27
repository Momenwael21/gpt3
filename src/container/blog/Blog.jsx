import React from "react";
import { BlogCard } from "../../components/index";
import cardM from "../../assets/card-main.webp";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";
import card4 from "../../assets/card4.webp";

const Blog = () => {
  return (
    <section id="blog" className="blog">
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
    </section>
  );
};

export default Blog;
