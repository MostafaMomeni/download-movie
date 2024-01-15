import React from "react";
import "./MovieBox.css";
import { Link } from "react-router-dom";

export default function MovieBox(props) {
  return (
    <>
    <div className="movie-box-parent">
      <Link to={`/movie-info/${props.type === "فیلم" ? props.shortName+"/0" : props.shortName+"/1-1"}/1`} className="movie-box">
        <div className="img-movie-box-parent">
          <img
            src={`./Assets/${props.cover}`}
            alt="item"
            className="img-movie-box"
          />
          {props.free === 1 ? (
            <span className="free-span-movie-box">رایگان</span>
          ) : null}
          <div className="info-movie-box">
            <p>{props.genre}</p>
            <i className="imdb-score-movie-box">{props.imdb}</i>
          </div>
        </div>
        <h2 className="title-movie-box">{props.title}</h2>
        {props.text && <p className="text-movie-box">{props.text}</p>}
      </Link>
    </div>

    </>
  );
}
