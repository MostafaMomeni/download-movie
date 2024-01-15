import React from 'react'
import Landing from '../../Components/Landing/Landing'
import FilterBox from '../../Components/FilterBox/FilterBox'
import GroupingMovies from '../../Components/GroupingMovies/GroupingMovies'
import Main from '../../Components/Main/Main'

export default function Home() {
  return (
    <>
    <Landing/>
    <FilterBox/>
    <GroupingMovies/>
    <Main/>
    </>
  )
}
