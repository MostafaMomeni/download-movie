import React, { useState } from 'react'
import "./TopInfoMovie.css"
import { FaImdb } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export default function TopInfoMovie(props) {

  const [isPlusBtn , setIsPlusBtn] = useState(true)
  const [isMinesBtn , setIsMinesBtn] = useState(true)

  const [showLikes , setShowLikes] = useState(props.likesNumber)
  const [showDisLikes , setShowDisLikes] = useState(props.disLikesNumber)

  const plusHandler = () =>{
    if(isPlusBtn){
      setShowLikes(showLikes+1)
      setShowDisLikes(props.disLikesNumber)
      setIsPlusBtn(false)
      setIsMinesBtn(true)
    }else{
      setIsPlusBtn(true)
      setShowLikes(showLikes-1)
    }
  }
  const minesHandler = () =>{
    if(isMinesBtn){
      setIsMinesBtn(false)
      setShowDisLikes(showDisLikes+1)
      setShowLikes(props.likesNumber)
      setIsPlusBtn(true)
    }else{
      setIsMinesBtn(true)
      setShowDisLikes(showDisLikes-1)
    }
  }

  return (
   <>
   <div className="top-info-movie-info-parent">
        <div className="img-top-info-movie-info">
          <img src={`/Assets/${props.cover}`} alt={props.title} />
        </div>
        <div className="left-item-top-info-movie-info">
          <div>
            <h2>{props.type} {props.title}</h2>
            <span className="description-top-info-movie-info">{props.genre}</span>
            <span className="description-top-info-movie-info">{props.year}</span>
            {props.alarm === 1 && (
            <span className="description-top-info-movie-info text-danger">
              بالای {props.alarmText} سال
            </span>
            )}
            <span className="description-top-info-movie-info"> {props.country} </span>
            <span className="description-top-info-movie-info">{props.time} دقیقه</span>
          </div>
          <hr />
          <div className="likes-top-info-movie-info-parent">
            <div>
              <span className="likes-top-info-movie-info">
                <FaImdb className="likes-icon-top-info-movie-info" />
                {props.imdb}
              </span>
              <span className="likes-top-info-movie-info">
                <FcLike className="likes-icon-top-info-movie-info" />
                {props.likes}%
              </span>
            </div>
            <div className="builders-top-info-movie-info">
              <p>بازیگران : {props.Actors}</p>
              <p>کارگردان : {props.Director}</p>
            </div>
          </div>
          <div>
            <button className={`button-top-info-movie-info ${isPlusBtn == false && "active-plus-btn"}`} onClick={()=> plusHandler()}>
              {showLikes} <AiFillLike />
            </button>
            <button className={`button-top-info-movie-info ${isMinesBtn == false && "active-mines-btn"}`} onClick={()=> minesHandler()}>
              {showDisLikes} <AiFillDislike />
            </button>
          </div>
        </div>
      </div>
   </>
  )
}
