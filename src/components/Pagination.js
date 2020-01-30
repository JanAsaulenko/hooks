import React from "react";
import { Link } from "react-router-dom"
import { parse } from "query-string"
export const Page = ({ page, currentPage, url }) => {
  return (
    <li className={`page-item ${ page === Number(currentPage) ? "active" : "" }  `}>
      <Link to={`${ url }?page=${ page }`} className="page-link" >
        {page}
      </Link>
    </li>
  )
}


export const LIMIT = 4;

export const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  return (

    <ul className="pagination">
      {pages.map(page => {
        return <Page page={page} currentPage={currentPage}
          url={url} key={page} />
      })}
    </ul>
  )
}

function range (start, end) {
  return [...Array(end).keys()].map(item => Number(item) + start);
}


export const getPaginator = (search) => {
  const parsedSearch = parse(search);
  const currentPage = parsedSearch.page ? Number(parsedSearch.page) : 1;
  const offset = currentPage * LIMIT - LIMIT;
  return { currentPage, offset }
}