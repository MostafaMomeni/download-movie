import React from 'react'
import MainRight from './MainRight'
import MainLeft from "./MainLeft"
import "./Main.css"

export default function Main() {
  return (
    <>
    <div className='row' style={{width:"96%", margin:"auto"}}>
    <div className='col-lg-9 col-sm-12'>
    <MainRight/>
    </div>
    <div className='col-lg-3 main-left-parent'>
    <MainLeft/>
    </div>
    </div>
    </>
  )
}
