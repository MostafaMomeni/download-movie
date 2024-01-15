import React, { useState } from "react";
import FilterBox from "../../Components/FilterBox/FilterBox";
import MainMovieItem from "../../Components/MainMovieItem/MainMovieItem";
import Pagination from "../../Components/Pagination/Pagination";
import Data from "../../Data";

export default function AllMovies() {
  const [movies, setMovies] = useState(Data);
  const[showMovies , setShowMovies] = useState([])
  return (
    <>
      <div className="my-4">
        <FilterBox />
      </div>
      <div className="mx-4">
        {showMovies.map((item) => (
          <MainMovieItem {...item} />
        ))}
        <Pagination
          path="/all-movies"
          items={movies}
          itemsCount={5}
          setShowMovies={setShowMovies}
        />
      </div>
    </>
  );
}
