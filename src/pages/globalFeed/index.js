import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Feed from "../../components/Feed";

const GlobalFeed = () => {
  const apiUrl = "/articles?limit10&offset=0";
  const [{ response, isloading, error }, doFetch] = useFetch(apiUrl);
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  return (
    <div className="home-page">
      <div className="banner">
        {" "}
        <div className="container">
          <h1>Medium clone</h1>
          <p>A place to share knwoledge</p>
        </div>
      </div>
      <div className="conainer page">
        <div className="row">
          <div className="col-md-9">
            {isloading && <div>Loading</div>}
            {error && <div>Some error</div>}
            {!isloading && response && <Feed articles={response.articles} />}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
