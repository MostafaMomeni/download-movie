import React from "react";
import "./MainMovieItem.css";
import { Link } from "react-router-dom";
import { FcLike ,FcDownload } from "react-icons/fc";
import { ImMenu } from "react-icons/im";
import { MdOutlineDateRange } from "react-icons/md";
import { FaImdb } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

export default function MainMovieItem(props) {
  return (
    <>
      <article className="row movie-item-parent">
        <div className="img-movie-item-parent">
          <img
            src={`/Assets/${props.cover}`}
            alt={props.title}
            className="img-movie-item"
          />
        </div>
        <div className="left-movie-item">
          <Link to={`/movie-info/${props.type === "فیلم" ? props.shortName+"/0" : props.shortName+"/1-1"}/1`}>
          <h2 className="title-movie-item">{props.type} {props.title}</h2>
          </Link>
          {props.text && <p>{props.text}</p>}
          <span className="infos-movie-item">
            <ImMenu /> {props.genre}
          </span>
          <span>
            <FcLike /> {props.likes}% رضایت
          </span>
          <hr />
          <p>بازیگران:{props.Actors}</p>
          <p>کارگردان:{props.Director}</p>
          <div className="short-story-movie-item">
            {props.description}
          </div>
          <div className="bottom-part-movie-item">
            <div className="bottom-part-movie-item">
            <div className="bottom-part-info-movie-item">
              <i>
                <MdOutlineDateRange className="bootom-icon-movie-item"/>
              </i>
              <span>تاریخ انتشار:</span>
              <span>{props.year}</span>
            </div>
            <div className="bottom-part-info-movie-item">
              <i>
                <IoEarthOutline className="bootom-icon-movie-item"/>
              </i>
              <span>کشور: </span>
              <span>{props.country}</span>
            </div>
            <div className="bottom-part-info-movie-item">
              <i>
                <FaImdb className="bootom-icon-movie-item"/>
              </i>
              <span>امتیاز: </span>
              <span>{props.imdb}</span>
            </div>
            </div>
            <div>
              <Link to={`/movie-info/${props.type === "فیلم" ? props.shortName+"/0" : props.shortName+"/1-1"}/1`} className="btn btn-outline-primary link-btn-movie-item"><FcDownload/> دانلود فیلم</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
