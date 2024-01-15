import React, { useState } from "react";
import MainMovieItem from "../MainMovieItem/MainMovieItem";
import { Link } from "react-router-dom";
import data from "../../Data";

export default function MainRight() {
  const [movies, setMovies] = useState(data);

  return (
    <>
    {movies.slice(0,5).map(item =>(
      <MainMovieItem {...item}/>
    ))}
    <Link to="/all-movies/1" className="btn btn-outline-primary w-100 p-2">مشاهده همه فیلم ها</Link>
    </>
  );
}
