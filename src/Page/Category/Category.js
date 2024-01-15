import React, { useEffect, useState } from "react";
import "./Category.css";
import Data from "../../Data";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainMovieItem from "../../Components/MainMovieItem/MainMovieItem";
import Pagination from "../../Components/Pagination/Pagination";
import NotFound from "../../Components/NotFound/NotFound";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DropDownBox from "../../Components/DropDownBox/DropDownBox";
import { AiOutlineSearch } from "react-icons/ai";

export default function Category() {
  const params = useParams().movie;
  const navigate = useNavigate();

  const [data, setData] = useState(Data);
  const [showData, setShowData] = useState([]);
  const [showPaginatData, setShowPaginatData] = useState([]);

  const [selectMovieOrSerial, SetSelectMovieOrSerial] = useState("empty");
  const [selectGenre, setSelectGenre] = useState("empty");
  const [selectCountry, setSelectCountry] = useState("empty");
  const [selectDouble, setSelectDouble] = useState("empty");
  const [selectScore, setSelectScore] = useState("empty");

  
  const [boxs, setBoxs] = useState([
    {
      id: 1,
      title: "فیلم یا سریال",
      items: [
        { id: 1, title: "همه", value: "empty" },
        { id: 2, title: "فیلم", value: "فیلم" },
        { id: 3, title: "سریال", value: "سریال" },
      ],
    },
    {
      id: 2,
      title: "ژانر",
      items: [
        { id: 1, title: "همه", value: "empty" },
        { id: 2, title: "اکشن", value: "اکشن" },
        { id: 3, title: "کمدی", value: "کمدی" },
        { id: 4, title: "درام", value: "درام" },
        { id: 5, title: "عاشقانه", value: "عاشقانه" },
      ],
    },
    {
      id: 3,
      title: "کشور",
      items: [
        { id: 1, title: "همه", value: "empty" },
        { id: 2, title: "ایران", value: "ایران" },
        { id: 3, title: "خارجی", value: "خارجی" },
        { id: 4, title: "آلمان", value: "آلمان" },
        { id: 5, title: "فرانسه", value: "فرانسه" },
        { id: 6, title: "چین", value: "چین" },
        { id: 7, title: "هند", value: "هند" },
      ],
    },
    {
      id: 4,
      title: "دوبله یا زیر نویس",
      items: [
        { id: 1, title: "همه", value: "empty" },
        { id: 2, title: "دوبله", value: "دوبله" },
        { id: 3, title: "زیر نویس", value: "زیر نویس" },
      ],
    },
    {
      id: 5,
      title: "امتیاز",
      items: [
        { id: 1, title: "همه", value: "empty" },
        { id: 2, title: "0 تا 2", value: "0to2" },
        { id: 3, title: "2 تا 5", value: "2to5" },
        { id: 4, title: "5 تا 7", value: "5to7" },
        { id: 5, title: "بالای 7", value: "up7" },
      ],
    },
  ]);

  let paramsSplit = params.split("_");

  useEffect(() => {
    if (params === "allMovie") {
      setShowData(data);
    } else if (
      paramsSplit[0] === "empty" &&
      paramsSplit[1] === "empty" &&
      paramsSplit[2] === "empty" &&
      paramsSplit[3] === "empty" &&
      paramsSplit[4] === "empty"
    ) {
      navigate("/category/allMovie/1");
    } else {
      let newDatas = [];
      let newUpdateDatas = [];
      let filterGenre = null;
      let filterCountry = null;
      let filterDouble = null;
      let filterScore = null;
      let score = paramsSplit[4].split("to");

      if (paramsSplit[0] != "empty") {
        let filterMovieOrSerial = data.filter(
          (item) => item.type === paramsSplit[0] && newDatas.push(item)
        );
        !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
      }

      if (paramsSplit[1] != "empty") {
        if (newDatas.length) {
          filterGenre = newDatas.map(item =>{
            item.genre.includes(paramsSplit[1]) && newUpdateDatas.push(item)
          })
          newDatas = [...newUpdateDatas];
          newUpdateDatas = [];
          !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
        } else {
          filterGenre = data.map(item =>{
            item.genre.includes(paramsSplit[1]) && newDatas.push(item)
          })
          !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
        }
      }

      if (paramsSplit[2] != "empty") {
        if(paramsSplit[2] === "خارجی"){

          if (newDatas.length) {
            filterCountry = newDatas.filter(
              (item) => item.country !== "ایران" && newUpdateDatas.push(item)
            );
            newDatas = [...newUpdateDatas];
            newUpdateDatas = [];
            !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          } else {
            filterCountry = data.filter(
              (item) => item.country !== "ایران" && newDatas.push(item)
              );
              !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          }
        }else{
          if (newDatas.length) {
            filterCountry = newDatas.filter(
              (item) =>
                item.country === paramsSplit[2] && newUpdateDatas.push(item)
            );
            newDatas = [...newUpdateDatas];
            newUpdateDatas = [];
            !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          } else {
            filterCountry = data.filter(
              (item) => item.country === paramsSplit[2] && newDatas.push(item)
              );
              !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          }
        }
      }

      if (paramsSplit[3] != "empty") {
        if (newDatas.length) {
          filterDouble = newDatas.map(item =>{
            item.double.includes(paramsSplit[3]) && newUpdateDatas.push(item)
          })
          newDatas = [...newUpdateDatas];
          newUpdateDatas = [];
          !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
        } else {
          filterDouble = data.map(item =>{
            item.double.includes(paramsSplit[3]) && newDatas.push(item)
          })
          !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
        }
      }

      if (paramsSplit[4] != "empty") {
        if (newDatas.length) {
          if (paramsSplit[4] === "up7") {
            filterScore = newDatas.filter(
              (item) => item.imdb >= 7 && newUpdateDatas.push(item)
            );
            newDatas = [...newUpdateDatas];
            newUpdateDatas = [];
            !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          } else {
            score = paramsSplit[4].split("to");
            filterScore = newDatas.filter(
              (item) =>
                item.imdb >= score[0] &&
                item.imdb <= score[1] &&
                newUpdateDatas.push(item)
            );
            newDatas = [...newUpdateDatas];
            newUpdateDatas = [];
            !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          }
        } else {
          if (paramsSplit[4] === "up7") {
            filterScore = data.filter(
              (item) => item.imdb >= 7 && newDatas.push(item)
            );
          !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          } else {
            let score = paramsSplit[4].split("to");
            filterScore = data.filter(
              (item) =>
                item.imdb >= score[0] &&
                item.imdb <= score[1] &&
                newDatas.push(item)
            );
          !newDatas.length && newDatas.push({ id: -1, title: "notFound" });
          }
        }
      }

      setShowData(newDatas);
    }
  }, [params]);


  const showSwalFilter = () => {
    const MySwal = withReactContent(Swal);

    let movieValueSwal = "empty"
    let genreValueSwal = "empty"
    let countryValueSwal = "empty"
    let doubleValueSwal = "empty"
    let scoreValueSwal = "empty"

    MySwal.fire({
      title: "جستجو و فیلتر فیلم ها",
      confirmButtonText: "جستوجو",
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonText: "بستن",
      html: (
        <div className="filter-box-parent-swal">
          <DropDownBox swal={true} {...boxs[0]} setDropDownValue={(e) => movieValueSwal = e.target.value} />
          <DropDownBox swal={true} {...boxs[1]} setDropDownValue={(e) => genreValueSwal = e.target.value} />
          <DropDownBox swal={true} {...boxs[2]} setDropDownValue={(e) => countryValueSwal = e.target.value} />
          <DropDownBox swal={true} {...boxs[3]} setDropDownValue={(e) => doubleValueSwal = e.target.value} />
          <DropDownBox swal={true} {...boxs[4]} setDropDownValue={(e) => scoreValueSwal = e.target.value} />
        </div>
      ),
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/category/${movieValueSwal}_${genreValueSwal}_${countryValueSwal}_${doubleValueSwal}_${scoreValueSwal}_/1`);
      }
    });
  };

  return (
    <>
     <div className="filter-btn-box-parent ">
        <button
          className="btn btn-outline-primary filter-btn-filter-box"
          onClick={() => showSwalFilter()}
        >
          جستجو و فیلتر فیلم ها
          <AiOutlineSearch />
        </button>
      </div>
      <div className="category-parent">
        <div className="main-right-category">
          <h2>نتایج جستجو</h2>
          {showData.length ? (
            <>
              {showPaginatData.map((item) =>
                item.id === -1 && item.title === "notFound" ? (
                  <NotFound text="هیچ نتیجه ای برای این جستوجو پیدا نشد" />
                ) : (
                  <MainMovieItem {...item} />
                )
              )}
              <Pagination
                path={`/category/${params}`}
                items={showData}
                itemsCount={5}
                setShowMovies={setShowPaginatData}
              />
            </>
          ) : (
            <NotFound text="هیچ نتیجه ای برای این جستوجو پیدا نشد" />
          )}
        </div>
        <div className="main-left-category">
          <div className="main-left-child-category">
            <h4>تنظیمات نمایشی</h4>
            <select
              className="select-box-filter-category"
              onChange={(e) => SetSelectMovieOrSerial(e.target.value)}
            >
              <option value="empty" selected disabled hidden>
                فیلم یا سریال
              </option>
              <option value="empty">همه</option>
              <option value="فیلم">فیلم</option>
              <option value="سریال">سریال</option>
            </select>

            <select
              className="select-box-filter-category"
              onChange={(e) => setSelectGenre(e.target.value)}
            >
              <option value="empty" selected disabled hidden>
                ژانر
              </option>
              <option value="empty">همه</option>
              <option value="اکشن">اکشن</option>
              <option value="کمدی">کمدی</option>
              <option value="درام">درام</option>
              <option value="عاشقانه">عاشقانه</option>
            </select>

            <select
              className="select-box-filter-category"
              onChange={(e) => setSelectCountry(e.target.value)}
            >
              <option value="empty" selected disabled hidden>
                کشور
              </option>
              <option value="empty">همه</option>
              <option value="ایران">ایران</option>
              <option value="خارجی">خارجی</option>
              <option value="هند">هند</option>
              <option value="چین">چین</option>
              <option value="روسیه">روسیه</option>
              <option value="فرانسه">فرانسه</option>
              <option value="آلمان">آلمان</option>
            </select>

            <select
              className="select-box-filter-category"
              onChange={(e) => setSelectDouble(e.target.value)}
            >
              <option value="empty" selected disabled hidden>
                دوبله یا زیر نویس
              </option>
              <option value="empty">هر دو</option>
              <option value="دوبله">دوبله</option>
              <option value="زیر نویس">زیر نویس</option>
            </select>

            <select
              className="select-box-filter-category"
              onChange={(e) => setSelectScore(e.target.value)}
            >
              <option value="empty" selected disabled hidden>
                امتیاز
              </option>
              <option value="empty">همه</option>
              <option value="0to2">0 تا 2</option>
              <option value="2to5">2 تا 5</option>
              <option value="5to7">5 تا 7</option>
              <option value="up7">بالای 7</option>
            </select>
            <Link
              to={`/category/${selectMovieOrSerial}_${selectGenre}_${selectCountry}_${selectDouble}_${selectScore}/1`}
            >
              <button className="link-category">جستوجو</button>
            </Link>
          </div>
        </div>
      </div>
     
    </>
  );
}
