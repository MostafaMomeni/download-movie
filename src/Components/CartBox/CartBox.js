import React from "react";
import "./CartBox.css";
import { FcLike } from "react-icons/fc";
import { FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CartBox(props) {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-lg-3 col-s-6 my-3">
        <Link to={`/movie-info/${props.type === "فیلم" ? props.shortName+"/0" : props.shortName+"/1-1"}/1`}>
          <div className="cart-box-parent">
            <img
              src={`./Assets/${props.cover}`}
              alt={props.englishName}
              className="img-cart-box"
            />
            <div className="option-cart-box">
              <p>
                <span className="like-cart-box">
                  <FcLike />
                  {props.likes}%
                </span>
                <span className="like-cart-box">
                  <FaImdb />
                  10/{props.imdb}
                </span>
              </p>
              <h2>{props.title}</h2>
              <p>
                {props.englishName} {props.year}
              </p>
              {props.theBest === 1 ? (
                <div className="btn btn-outline-warning">فیلم برتر</div>
              ) : null}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
