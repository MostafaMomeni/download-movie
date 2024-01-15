import React, { useState , useEffect , useContext } from "react";
import "./Header.css";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch ,AiOutlineUser } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link , useNavigate} from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from "sweetalert2";

export default function Header() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  const [searchValue , setSearchValue] = useState("empty")

  const navigate = useNavigate()
  const authContext = useContext(AuthContext)
  let path = window.location.href

  useEffect(()=>{
    setIsShowSideBar(false)
  },[path])

  const logoutHandler =() =>{
    Swal.fire({
      title: "آیا میخواهید از اکانت خود خارج شوید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله خارج میشم",
      cancelButtonText: "خیر دستم خورد",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "شما با مفوقیت از اکانت خود خارج شدید",
          icon: "success",
        });
        localStorage.removeItem("user")
        window.location.reload()
      }
    });
  }

  return (
    <header className="header">
      <AiOutlineMenu
        className="show-menu-icon"
        onClick={() => setIsShowSideBar(true)}
      />

      <div
        className={`right-header col-9 ${
          isShowSideBar ? "show-menu" : "close-menu"
        }`}
      >
        <div className="logo-parent-header">
          <AiOutlineClose
            className="close-menu-icon"
            onClick={() => setIsShowSideBar(false)}
          />
          <Link to={"/"}>
          <img src="./logo192.png" alt="logo" className="logo-img" />
          <span>Mostafa</span>
          </Link>
        </div>
        <div className="side-bar-items-parent" style={{display:"flex" , alignItems:"center"}}>
          <ul className="ul-header">
            <li>
                سبک
                <RiArrowDropDownLine />
              <ul className="main-header-dropdown">
                <li>
                <Link to="/category/empty_اکشن_empty_empty_empty/1">
                  اکشن
                  </Link>
                </li>
                <li>
                <Link to="/category/empty_درام_empty_empty_empty/1">
                  درام
                  </Link>
                </li><li>
                <Link to="/category/empty_کمدی_empty_empty_empty/1">
                  کمدی
                  </Link>
                </li><li>
                <Link to="/category/empty_عاشقانه_empty_empty_empty/1">
                  عاشقانه
                  </Link>
                </li>
              </ul>
            </li>
            <li>
                کشور
                <RiArrowDropDownLine />
              <ul className="main-header-dropdown">
                <li>
                  <Link to="/category/empty_empty_ایران_empty_empty/1">
                  ایران
                  </Link>
                  </li>
                  <li>
                  <Link to="/category/empty_empty_روسیه_empty_empty/1">
                  روسیه
                  </Link>
                  </li><li>
                  <Link to="/category/empty_empty_چین_empty_empty/1">
                  چین
                  </Link>
                  </li><li>
                  <Link to="/category/empty_empty_هند_empty_empty/1">
                  هند
                  </Link>
                  </li><li>
                  <Link to="/category/empty_empty_فرانسه_empty_empty/1">
                  فرانسه
                  </Link>
                  </li>
              </ul>
            </li>
            <li>
                فیلم یا سریال
                <RiArrowDropDownLine />
              <ul className="main-header-dropdown">
                <li>
                  <Link to="/category/allMovie/1">
                  فیلم و سریال
                  </Link>
                  </li>
                <li>
                  <Link to="/category/فیلم_empty_empty_empty_empty/1">
                  فیلم
                  </Link>
                  </li>
                <li>
                  <Link to="/category/سریال_empty_empty_empty_empty/1">
                  سریال
                  </Link>
                  </li>
              </ul>
            </li>
            <li>
                امتیاز
                <RiArrowDropDownLine />
              <ul className="main-header-dropdown">
                <li>
                <Link to="/category/empty_empty_empty_empty_0to2/1">0 تا 2</Link>
                </li>
                <li>
                <Link to="/category/empty_empty_empty_empty_2to5/1">2 تا 5</Link>
                </li>
                <li>
                <Link to="/category/empty_empty_empty_empty_5to7/1">5 تا 7</Link>
                </li>
                <li>
                <Link to="/category/empty_empty_empty_empty_up7/1">بالای 7</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="regiter-login-header">  
          {authContext.isLogin ? (
            <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="" style={{backgroundColor:"transparent" , outline:"none" , border:"none"}}>
            {authContext.userInfos.userName}
            <AiOutlineUser className="me-3"/>
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/p-admin/movies">
                پنل مدیر
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={()=> logoutHandler()}>
                خروج از اکانت
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          ) : (
            <Link to="/register">
            ورود/ ثبت نام
            <AiOutlineUser className="me-3"/>
            </Link>
          )}
        </div>
      </div>
      <div className="search-header-parent">
        <div className="search-header">
          <input type="search" onKeyDown={(e)=> 
            (
              e.keyCode=== 13 ?
              (
                searchValue.trim() === "" ?(
                  navigate(`/search/empty/1`)
                ):(
                  navigate(`/search/${searchValue}/1`)
                )
              )
              :null
            )} 
            placeholder="جست و جو کنید" className="input-search-header"  onChange={(e)=> setSearchValue(e.target.value)}/>
          <Link to={searchValue.trim() === "" ? "/search/empty/1" : `/search/${searchValue}/1`}>
          <AiOutlineSearch className="search-icon" />
          </Link>
        </div>
      </div>
      
        <div className={`div-on-close-header ${isShowSideBar ? "show-div-on-close" : "hide-div-on-close"}`} onClick={()=> setIsShowSideBar(false)}></div>
    </header>
  );
}
