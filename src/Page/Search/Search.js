import React, { useEffect, useState } from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useParams , useNavigate } from "react-router-dom";
import Data from "../../Data"
import MainMovieItem from "../../Components/MainMovieItem/MainMovieItem"
import NotFound from "../../Components/NotFound/NotFound"
import Pagination from "../../Components/Pagination/Pagination"

export default function Search() {
  const params = useParams().value;
  const navigate = useNavigate()

  const [data , setData] = useState(Data)
  const [filteredData , setFilteredData] = useState([])
  const [searchValue, setSearchValue] = useState(params);
  const [showMovies, setShowMovies] = useState([]);

  useEffect(()=>{
    setFilteredData([])
    if(params === "empty"){
      setFilteredData(data)
    }else{
    const searchTitle = data.map(item =>{
        if(item.title.includes(params)){
        setFilteredData(prev => {
          prev.push({...item})
          return [...prev]
        })
      }
       else if(item.type.includes(params)){
        setFilteredData(prev => {
          prev.push({...item})
          return [...prev]
        })
      }
       else if(item.double.includes(params)){
        setFilteredData(prev => {
          prev.push({...item})
          return [...prev]
        })
      }
       else if(item.genre.includes(params)){
        setFilteredData(prev => {
          prev.push({...item})
          return [...prev]
        })
      }
       else if(item.country.includes(params)){
        setFilteredData(prev => {
          prev.push({...item})
          return [...prev]
        })
      }
    })
  }
},[params])


  return (
    <>
      <div className="search-box-parent-search">
        <span className="search-box-search">
          <input
            type="search"
            placeholder="جستجو کنید..."
            className="input-box-search"
            value={searchValue === "empty" ? "" : searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) =>
              e.keyCode === 13
                ? searchValue.trim() === ""
                  ? navigate(`/search/empty/1`)
                  : navigate(`/search/${searchValue}/1`)
                : null
            }
          />
          <Link
            to={
              searchValue.trim() === ""
                ? "/search/empty/1"
                : `/search/${searchValue}/1`
            }
          >
            <AiOutlineSearch className="search-icon-search" />
          </Link>
        </span>
      </div>
      <div className="main-search-parent">
        {filteredData.length ? (
          <>
          {
            showMovies.map(item =>(
              <MainMovieItem {...item}/>
              ))
            }
            <Pagination
            path={`/search/${params}`}
            items={filteredData}
            itemsCount={5}
            setShowMovies={setShowMovies}
            />
            </>
            ) : (
              <NotFound text="هیچ نتیجه ای پیدا نشد" />
            )}
      </div>
    </>
  );
}
