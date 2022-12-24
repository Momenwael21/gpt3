import React from "react";
import "./blogCard.css";

const BlogCard = ({ image, type }) => {
  return (
    <div className={`card ${type}`}>
      <div className="image">
        <img src={image} alt="topic_image" />
      </div>
      <div className="card-body">
        <div className="article-title">
          <p className="date">Sep 26, 2021</p>
          <h6 className="title">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h6>
        </div>
        <a className="btn" href="/#">
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
