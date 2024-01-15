import React, { useEffect , useState } from "react";
import "./UpdateMovieItem.css";
import { Link } from "react-router-dom";

export default function UpdateMovieItem(props) {

  const timeSince =(date) => {
    let seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " سال";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " ماه";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " روز";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " ساعت";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " ذقیقه";
    }
    return Math.floor(seconds) + " ثانیه";
  }

  const date = new Date("2023/9/26 19:30:00") 
  const [resultDate , setResultDate] = useState("")

  useEffect(()=>{
    setResultDate(timeSince(date))
  },[])
  return (
    <>
      <div className="row">
        <div className="col-12 my-2">
          <Link
            to={`/movie-info/${
              props.type === "فیلم"
                ? props.shortName + "/0"
                : props.shortName + "/1-1"
            }/1`}
            className="update-movie-item-parent"
          >
            <img
              src={`./Assets/${props.cover}`}
              alt={props.title}
              className="update-movies-img"
            />
            <div className="footer-update-movie-item">
              <span className="title-update-movie-item">{props.title}</span>
              <span className="date-update-movie-item">
                {/* {props.updatedDate} */}
                {resultDate.toString()}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
