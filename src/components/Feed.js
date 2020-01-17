import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ articles }) => (
  <div>
    {articles.map((article, index) => {
      return (
        <div className="article-preview" key={index}>
          <div className="article-meta">
            <Link to={`profiles/${article.author.username}`}>
              <img
                src={article.author.image ? article.author.image : ""}
                alt=""
              />
            </Link>
            <div className="info">
              <Link
                to={`profiles/${article.author.username}`}
                className="author"
              >
                {article.uathor.username}
              </Link>
              <span className="date">{article.createdAt}</span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Feed;
