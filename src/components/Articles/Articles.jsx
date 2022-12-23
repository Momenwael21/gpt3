import React from "react";
import "./articles.css";

const Articles = ({ title, body, from }) => {
  return (
    <div className={`article ${from}`}>
      <div className="article-title">
        <h5>{title}</h5>
      </div>
      <p className="article-body">{body}</p>
    </div>
  );
};

export default Articles;
