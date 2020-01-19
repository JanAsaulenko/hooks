import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <div>{article.title}</div>
          </div>
        );
      })}
      sdsd
    </div>
  );
};

export default Feed;
