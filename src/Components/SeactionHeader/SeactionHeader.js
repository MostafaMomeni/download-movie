import React from 'react'
import "./SeactionHeader.css"
import { Link } from 'react-router-dom'

export default function SeactionHeader(props) {
  return (
    <>
    <div className='seaction-header-parent'>
        <div className='title-seaction-header'>{props.title}</div>
        <Link to={props.to} className='link-seaction-header'>مشاهده همه</Link>
    </div>
    </>
  )
}
