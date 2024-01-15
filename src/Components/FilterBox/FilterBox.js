import React, { useState } from "react";
import "./FilterBox.css";
import DropDownBox from "../DropDownBox/DropDownBox";
import { AiOutlineSearch } from "react-icons/ai";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link, useNavigate } from "react-router-dom";

export default function FilterBox() {
  const navigate = useNavigate();

  const [movieValue, setMovieValue] = useState("empty");
  const [genreValue, setGenreValue] = useState("empty");
  const [countryValue, setCountryValue] = useState("empty");
  const [doubleValue, setDoubleValue] = useState("empty");
  const [scoreValue, setScoreValue] = useState("empty");

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
      <div className="filter-box-parent">
        <DropDownBox {...boxs[0]} setDropDownValue={setMovieValue} />
        <DropDownBox {...boxs[1]} setDropDownValue={setGenreValue} />
        <DropDownBox {...boxs[2]} setDropDownValue={setCountryValue} />
        <DropDownBox {...boxs[3]} setDropDownValue={setDoubleValue} />
        <DropDownBox {...boxs[4]} setDropDownValue={setScoreValue} />
        <Link
          to={`/category/${movieValue}_${genreValue}_${countryValue}_${doubleValue}_${scoreValue}_/1`}
          className="btn-search-filter-box"
        >
          جست و جو
        </Link>
      </div>
      <div className="filter-btn-box-parent ">
        <button
          className="btn btn-outline-primary filter-btn-filter-box"
          onClick={() => showSwalFilter()}
        >
          جستجو و فیلتر فیلم ها
          <AiOutlineSearch />
        </button>
      </div>
    </>
  );
}
