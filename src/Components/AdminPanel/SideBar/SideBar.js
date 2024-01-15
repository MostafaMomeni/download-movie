import React, { useState, useEffect } from "react";
import "./SideBar.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  let path = window.location.pathname;

  useEffect(() => {
    setIsShowSideBar(false);
  },[path]);

  return (
    <>
      <AiOutlineMenu
        className="show-side-bar-icone"
        onClick={() => setIsShowSideBar(true)}
      />
      <div className={`side-bar-parent ${isShowSideBar ? "show-side-bar" : "close-side-bar"}`}>
        <div className="header-side-bar">
        <AiOutlineClose
            className="close-side-bar-icon"
            onClick={() => setIsShowSideBar(false)}
          />
          <img src="/logo192.png" alt="logo" />
          <h4>mostafa</h4>
        </div>
        <div className="main-side-bar">
          <ul className="ul-side-bar">
            {/* <li><Link to="">
               خانه
              </Link></li> */}
            <li><Link to="new-movie">
               فیلم جدید
              </Link></li>
            <li>
              <Link to="movies">
              فیلم ها
              </Link>
              </li>
            <li>
              <Link to="comments">
              کامنت ها
              </Link>
              </li>
            <li>
              <Link to="/">
              بازگشت به سایت
              </Link>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}
