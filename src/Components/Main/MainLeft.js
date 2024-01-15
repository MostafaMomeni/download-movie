import React, { useState } from 'react'
import "./MainLeft.css"
import UpdateMovieItem from '../UpdateMovieItem/UpdateMovieItem'
import { Link } from 'react-router-dom'
import {RiMovie2Line} from "react-icons/ri"
import {updatedMovie} from "../../Data"

export default function MainLeft() {

  const [movies , setMovies] = useState(updatedMovie)

  return (
    <>
    <div className='update-title-main-left'>
      به روز شده ها
    </div>
    <div className='header-update-main-left'>
      <div className='d-flex'>
      <i className='ms-2'><RiMovie2Line/></i>
      <p>آپدیت سریال ها</p>
      </div>
    </div>
    <div>
      {movies.map(item =>(
        <UpdateMovieItem {...item}/>
      ))}
    </div>
    </>
  )
}
