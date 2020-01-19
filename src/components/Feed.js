import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ articles }) =>
{
  return (
    <div>
      { articles.map((article, index) =>
      {
        return (
          <div key={ index }>
            <div>{ article.title }</div>
          </div>
        );
      }) }
    </div>
  );
};

export default Feed;
