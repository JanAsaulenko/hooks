import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { ErrorMessage } from "./ErrorMessage";
import { LoadingComponent } from "./Loading";
import { Link } from "react-router-dom";


export const PopularTags = () => {
  let url = "/tags"
  const [{ response, error, isLoading }, doFetch] = useFetch(url);
  useEffect(() => {
    doFetch();
  }, [])
  if (isLoading || !response) {
    return <LoadingComponent />
  }
  else if (error) {
    return <ErrorMessage />
  }
  return (
    <div className="sidebar">
      <p>Popular tags</p>
      <div className="tag-list">
        {response.tags.map(tag => {
          return (
            <Link to={`/tags/${ tag }`} key={tag} className="tag-default tag-pill">
              {tag}
            </Link>
          )
        })}
      </div>
    </div>
  )
}