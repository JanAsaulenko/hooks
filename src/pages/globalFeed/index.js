import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Feed from "../../components/Feed";
import { Pagination, getPaginator } from "../../components/Pagination";
import { LIMIT } from "../../components/Pagination";
const GlobalFeed = (props) => {

  let { currentPage, offset } = getPaginator(props.location.search);
  const apiUrl = `/articles?limit=${ LIMIT }&offset=${ offset }`;
  const [{ response, isloading, error }, doFetch] = useFetch(apiUrl)


  useEffect(() => {
    doFetch();
  }, [doFetch, offset]);


  return (
    <div className="home-page">
      <div className="banner">
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
            {!isloading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination total={response.articlesCount} limit={LIMIT} url={"/"} currentPage={currentPage} />
              </>
            )
            }
          </div>
          <div className="col-md-3">Popular tags
            <div className="row">
              <div className="col-md-4">Latest</div>
              <div className="col-md-3"> Most liked</div>
              <div className="col-md-3">Ukrainian</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
