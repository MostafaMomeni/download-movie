import React from 'react'
import "./AdminPanel.css"
import { Outlet } from "react-router-dom";
import SideBar from '../../../Components/AdminPanel/SideBar/SideBar';

export default function AdminPanel() {
  return (
    <>
    <div id="content">
          <SideBar />
      </div>

      <div id="home" className="main-admin mt-5">
        <div className="container-fluid" id="home-content">
      <Outlet />
        </div>
      </div>
    </>
  )
}
