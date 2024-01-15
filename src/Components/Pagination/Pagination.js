import React, { useState, useEffect } from "react";
import "./Pagination.css";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { useParams, Link } from "react-router-dom";

export default function Pagination(props) {
  const pageParam = useParams().page;

  const categoryParam = useParams().categoryName;

  const [pageCount, setPageCount] = useState(null);

  const arrayPage = Array(pageCount).fill(0);

  useEffect(() => {
    let endIndex = props.itemsCount * pageParam;
    let startIndex = endIndex - props.itemsCount;
    let paginatedItems = props.items.slice(startIndex, endIndex);

    props.setShowMovies(paginatedItems);

    let pagesNumber = Math.ceil(props.items.length / props.itemsCount);
    setPageCount(pagesNumber);
  }, [pageParam, props.items]);

  return (
    <>
      {arrayPage.length == 1 ? null : (
        <div className="pagination-parent">
          <div className="items-pagination-parent">
            <Link to={`${props.path}/${1 === Number(pageParam) ? pageParam : Number(pageParam)-1}`} className={`icone-pagination ${Number(pageParam) === 1 && "hide-icon-pagination"}`}>
              <GiNextButton />
            </Link>
            <ul className="ul-pagination">
              {arrayPage.map((item, index) => (
                <Link
                  to={`${props.path}/${index + 1}`}
                  className={`${
                    index + 1 == pageParam ? "active-pagination-link" : ""
                  }`}
                >
                  <li>{index + 1}</li>
                </Link>
              ))}
            </ul>
            <Link to={`${props.path}/${arrayPage.length === Number(pageParam) ? pageParam : Number(pageParam)+1}`} className={`icone-pagination ${arrayPage.length === Number(pageParam) && "hide-icon-pagination"}`}>
              <GiPreviousButton />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
