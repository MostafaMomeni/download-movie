import React, { useEffect, useState } from "react";
import "./EditMovie.css";
import Data from "../../../Data";
import Input from "../../../Components/Form/Input";
import { useForm } from "../../../Hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../../Validators/Roules";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiOutlinePlus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export default function EditMovie() {
  const param = useParams().shortName;
  const [data, setData] = useState(Data);
  const [filterData, setFilterData] = useState([]);

  const [hdCam, setHdCam] = useState("");
  const [typeMovie, setTypeMovie] = useState(null);

  const [timeMovie, setTimeMovie] = useState("");

  const [movieDoubleName, setMovieDoubleName] = useState(null);
  const [movieDouble, setMovieDouble] = useState(null);

  const [posterDoubleName, setPosterDoubleName] = useState(null);
  const [posterDouble, setPosterDouble] = useState(null);

  const [changeMovieDouble, setChangeMovieDouble] = useState(false);
  const [changePosterDouble, setChangePosterDouble] = useState(false);

  const [movieZerName, setMovieZerName] = useState(null);
  const [movieZer, setMovieZer] = useState(null);

  const [posterZerName, setPosterZerName] = useState(null);
  const [posterZer, setPosterZer] = useState(null);

  const [editSerialDoubleName, setEditSerialDoubleName] = useState(null);
  const [editSerialDouble, setEditSerialDouble] = useState(null);

  const [editSerialDoublePosterName, setEditSerialDoublePosterName] =useState(null);
  const [editSerialDoublePoster, setEditSerialDoublePoster] = useState(null);

  const [fileNewSeasonName, setFileNewSeasonName] =useState(null);
  const [fileNewSeason, setFileNewSeason] = useState(null);

  const [fileNewSeasonPosterName, setFileNewSeasonPosterName] =useState(null);
  const [fileNewSeasonPoster, setFileNewSeasonPoster] = useState(null);

  const [changeMovieZer, setChangeMovieZer] = useState(false);
  const [changePosterZer, setChangePosterZer] = useState(false);

  const [isUploadMovieDouble, setIsUploadMovieDouble] = useState(false);
  const [isUploadMovieZer, setIsUploadMovieZer] = useState(false);

  const [isShowNewSeason, setIsShowNewSeason] = useState(false);
  const [isShowNewPart, setIsShowNewPart] = useState(false);

  const [isShowEditSeasonName, setIsShowEditSeasonName] = useState(false);
  const [seasonSelectedInfo, setSeasonSelectedInfo] = useState(null);

  const [isShowSwalEditPart, setIsShowSwalEditPart] = useState(false);
  const [infoEditPart, setInfoEditPart] = useState(null);

  const [isShowUploadEditSerialDouble, setIsShowUploadEditSerialDouble] =
    useState(false);
  const [
    isShowUploadEditSerialDoublePoster,
    setIsShowUploadEditSerialDoublePoster,
  ] = useState(false);

  useEffect(() => {
    const filteredData = data.filter((item) => item.shortName === param);
    setFilterData(filteredData);

    filteredData.map((item) => {
      setTypeMovie(item.type);
      setTimeMovie(item.time);
    });
  }, []);

  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      imdb: {
        value: "",
        isValid: false,
      },
      text: {
        value: "",
        isValid: false,
      },
      year: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      actors: {
        value: "",
        isValid: false,
      },
      Director: {
        value: "",
        isValid: false,
      },
      genre: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      country: {
        value: "",
        isValid: false,
      },
      storyMovie: {
        value: "",
        isValid: false,
      },
      aboutMovie: {
        value: "",
        isValid: false,
      },
      time: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [formStateSeason, onInputHandlerSeason] = useForm(
    {
      seasonTitle: {
        value: "",
        isValid: false,
      },
      seasonPartsTitle: {
        value: "",
        isValid: false,
      },
      seasonPartsTime: {
        value: "",
        isValid: false,
      },
      seasonPartsShortName: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [formStateNewPart, onInputHandlerNewPart] = useForm(
    {
      partsTitle: {
        value: "",
        isValid: false,
      },
      partsTime: {
        value: "",
        isValid: false,
      },
      partsShortName: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [formStateEditSeasonName, onInputHandlerEditSeasonName] = useForm(
    {
      seasonTitle: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [formStateEditParts, onInputHandlerEditParts] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      time: {
        value: "",
        isValid: false,
      },
      shortName: {
        value: "",
        isValid: false,
      },
      video: {
        value: "",
        isValid: false,
      },
      poster: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const uploadMovieDouble = () => {
    let inputImage = document.querySelector(".upload-double-movie").files[0];
    if (inputImage) {
      setMovieDoubleName(inputImage.name);
      setMovieDouble(inputImage);
    } else {
      setMovieDoubleName("");
      setMovieDouble("");
    }
  };

  const uploadPosterDouble = () => {
    let inputImage = document.querySelector(".upload-double-poster").files[0];
    if (inputImage) {
      setPosterDoubleName(inputImage.name);
      setPosterDouble(inputImage);
    } else {
      setPosterDoubleName("");
      setPosterDouble("");
    }
  };

  const uploadMovieZer = () => {
    let inputImage = document.querySelector(".upload-Zer-movie").files[0];
    if (inputImage) {
      setMovieZerName(inputImage.name);
      setMovieZer(inputImage);
    } else {
      setMovieZerName("");
      setMovieZer("");
    }
  };

  const uploadPosterZer = () => {
    let inputImage = document.querySelector(".upload-Zer-poster").files[0];
    if (inputImage) {
      setPosterZerName(inputImage.name);
      setPosterZer(inputImage);
    } else {
      setPosterZerName("");
      setPosterZer("");
    }
  };

  const uploadEditSerialDouble = () => {
    let inputImage = document.querySelector(".upload-edit-serial-double")
      .files[0];
    if (inputImage) {
      setEditSerialDoubleName(inputImage.name);
      setEditSerialDouble(inputImage);
    } else {
      setEditSerialDoubleName("");
      setEditSerialDouble("");
    }
  };

  const uploadEditPosterSerialDouble = () => {
    let inputImage = document.querySelector(".upload-edit-serial-double-poster")
      .files[0];
    if (inputImage) {
      setEditSerialDoublePosterName(inputImage.name);
      setEditSerialDoublePoster(inputImage);
    } else {
      setEditSerialDoublePosterName("");
      setEditSerialDoublePoster("");
    }
  };

  const uploadNewSeason = () => {
    let inputImage = document.querySelector(".upload-new-season")
      .files[0];
    if (inputImage) {
      setFileNewSeasonName(inputImage.name);
      setFileNewSeason(inputImage);
    } else {
      setFileNewSeasonName("");
      setFileNewSeason("");
    }
  };

  const uploadNewSeasonPoster = () => {
    let inputImage = document.querySelector(".upload-new-season-poster").files[0];
    if (inputImage) {
      setFileNewSeasonPosterName(inputImage.name);
      setFileNewSeasonPoster(inputImage);
    } else {
      setFileNewSeasonPosterName("");
      setFileNewSeasonPoster("");
    }
  };

  const showAlertSwalEditPart = () =>{
    Swal.fire({
      title:"شما توانایی ویرایش چند قسمت را به صورت همزمان ندارید آیا میخواهید اطلاعات ویرایش قسمت قبلی پاک شود؟",
      text:"توجه داشته باشید که در صورت تایید تمام قسمت های ویرایش شده پاک نمی شود و فقط اطلاعات قسمت انتخابی قبلی شما پاک می شود",
      icon:"warning",
      confirmButtonText:"بله پاک کن",
      showCancelButton:true,
      cancelButtonText:"نه پاک نکن",
    }).then(res => {
      if(res.isConfirmed){
        setIsShowSwalEditPart(false);
        setInfoEditPart(null);
      }
    })
  }

  return (
    <>
      {filterData.map((item) => (
        <>
          <div className="m-2">
            <h2>
              ویرایش{" "}
              <span className="text-primary">
                {item.type} {item.title}
              </span>
            </h2>
            <div className="edit-movie-parent">
              <form>
                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">نام فیلم:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie"
                    id="title"
                    value={item.title}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(30),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="اسم فیلم"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">امتیاز فیلم:</label>
                  <Input
                    type="number"
                    className="input-admin-edit-movie"
                    id="imdb"
                    value={item.imdb}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(1),
                      maxValidator(3),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="امتیاز فیلم"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">متن:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie"
                    id="text"
                    value={item.text}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(30),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="متن"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">سال ساخت:</label>
                  <Input
                    type="number"
                    className="input-admin-edit-movie"
                    id="year"
                    value={item.year}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(4),
                      maxValidator(4),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="سال ساخت"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">بازیگران:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie"
                    id="actors"
                    value={item.Actors}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(40),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="بازیگران"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">کارگردان:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie"
                    id="Director"
                    value={item.Director}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(30),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="کارگردان"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">ژانر فیلم:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie"
                    id="genre"
                    value={item.genre}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(20),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="ژانر"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">لینک:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie"
                    id="shortName"
                    value={item.shortName}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(30),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="لینک"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">کشور سازنده:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie"
                    id="country"
                    value={item.country}
                    element="input"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(30),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="کشور سازنده"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">داستان فیلم:</label>
                  <Input
                    className="input-admin-edit-movie textarea-admin-edit-movie"
                    id="storyMovie"
                    value={item.storyMovie}
                    element="textarea"
                    validation={[requiredValidator(), minValidator(3)]}
                    onInputHandler={onInputHandler}
                    placeholder="داستان فیلم"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">درباره فیلم:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie textarea-admin-edit-movie"
                    id="aboutMovie"
                    value={item.aboutMovie}
                    element="textarea"
                    validation={[requiredValidator(), minValidator(3)]}
                    onInputHandler={onInputHandler}
                    placeholder="درباره فیلم"
                  />
                </div>

                <div className="input-lable-edit-movie-parent">
                  <label className="lable-edit-movie">توضیح خلاصه:</label>
                  <Input
                    type="text"
                    className="input-admin-edit-movie textarea-admin-edit-movie"
                    id="description"
                    value={item.description}
                    element="textarea"
                    validation={[
                      requiredValidator(),
                      minValidator(3),
                      maxValidator(50),
                    ]}
                    onInputHandler={onInputHandler}
                    placeholder="توضیح خلاصه"
                  />
                </div>

                <div className="col-12 my-3 radio-edit-movie-parent">
                  <label htmlFor="hdCam">کیفیت پرده هست</label>
                  <input
                    type="radio"
                    value={1}
                    id="hdCam"
                    name="hdCam"
                    className="me-1 ms-3"
                    onChange={(e) => setHdCam(e.target.value)}
                    defaultChecked={item.hdCam === 1}
                  />
                  <label htmlFor="notHdCam">کیفیت پرده نیست</label>
                  <input
                    type="radio"
                    value={0}
                    id="notHdCam"
                    name="hdCam"
                    className="me-1 ms-3"
                    onChange={(e) => setHdCam(e.target.value)}
                    defaultChecked={item.hdCam === 0}
                  />
                </div>

                <div className="col-12 my-3 radio-edit-movie-parent">
                  <h4>{typeMovie}</h4>
                </div>

                {typeMovie === "فیلم" && (
                  <>
                    <div className="input-lable-edit-movie-parent">
                      <label for="time">زمان فیلم: </label>
                      <input
                        type="number"
                        id="time"
                        className="input-admin-edit-movie"
                        placeholder="زمان فیلم(دقیقه)"
                        value={timeMovie}
                        onChange={(e) => setTimeMovie(e.target.value)}
                      />
                    </div>

                    {item.srcVideo ? (
                      <>
                        <div className="col-12 mt-3 text-center">
                          <label>فیلم(دوبله شده)</label>
                          <br />
                          <video
                            className="video-edit-movie mt-3"
                            src={item.srcVideo}
                            controls
                            poster={`/Assets/${item.posterVideo}`}
                          ></video>
                          <br />
                          <button
                            className="btn btn-outline-primary m-3"
                            onClick={(e) => {
                              e.preventDefault();
                              setChangePosterDouble(!changePosterDouble);
                              setPosterDouble("");
                              setPosterDoubleName("");
                            }}
                          >
                            {changePosterDouble
                              ? "حذف آپلود پوستر"
                              : "عوض کردن پوستر"}
                          </button>
                          <button
                            className="btn btn-outline-primary m-3"
                            onClick={(e) => {
                              e.preventDefault();
                              setChangeMovieDouble(!changeMovieDouble);
                              setMovieDouble("");
                              setMovieDoubleName("");
                            }}
                          >
                            {changeMovieDouble
                              ? "حذف آپلود فیلم"
                              : "عوض کردن فیلم"}
                          </button>
                          {changeMovieDouble && (
                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagDouble">
                                انتخاب فیلم(دوبله شده) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagDouble"
                                  type="file"
                                  className="upload-double-movie"
                                  onChange={() => uploadMovieDouble()}
                                />
                                <br />
                                <span id="imageName">
                                  {movieDoubleName && movieDoubleName}
                                </span>
                              </label>
                            </div>
                          )}
                          {changePosterDouble && (
                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagPosterDouble">
                                انتخاب پوستر(فیلم دوبله شده) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagPosterDouble"
                                  type="file"
                                  className="upload-double-poster"
                                  onChange={() => uploadPosterDouble()}
                                />
                                <br />
                                <span id="imageName">
                                  {posterDoubleName && posterDoubleName}
                                </span>
                              </label>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="col-12 mt-3 text-center">
                        <button
                          className="btn btn-outline-primary m-3"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsUploadMovieDouble(!isUploadMovieDouble);
                            setMovieDoubleName("");
                            setMovieDouble("");
                            setPosterDoubleName("");
                            setPosterDouble("");
                          }}
                        >
                          {isUploadMovieDouble
                            ? "حذف آپلود فیلم(دوبله شده)"
                            : "آپلود فیلم(دوبله شده)"}
                        </button>

                        {isUploadMovieDouble && (
                          <>
                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagUploadDouble">
                                انتخاب فیلم(دوبله شده) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagUploadDouble"
                                  type="file"
                                  className="upload-double-movie"
                                  onChange={() => uploadMovieDouble()}
                                />
                                <br />
                                <span id="imageName">
                                  {movieDoubleName && movieDoubleName}
                                </span>
                              </label>
                            </div>

                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagUploadPosterDouble">
                                انتخاب پوستر(فیلم دوبله شده) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagUploadPosterDouble"
                                  type="file"
                                  className="upload-double-poster"
                                  onChange={() => uploadPosterDouble()}
                                />
                                <br />
                                <span id="imageName">
                                  {posterDoubleName && posterDoubleName}
                                </span>
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                    {item.srcSubtitleVideo ? (
                      <>
                        <div className="col-12 mt-3 text-center">
                          <label>فیلم(زیر نویس)</label>
                          <br />
                          <video
                            className="video-edit-movie mt-3"
                            src={item.srcSubtitleVideo}
                            controls
                            poster={`/Assets/${item.posterVideo}`}
                          ></video>
                          <br />
                          <button
                            className="btn btn-outline-primary m-3"
                            onClick={(e) => {
                              e.preventDefault();
                              setChangeMovieZer(!changeMovieZer);
                              setMovieZer("");
                              setMovieZerName("");
                            }}
                          >
                            {changeMovieZer
                              ? "حذف آپلود پوستر"
                              : "عوض کردن پوستر"}
                          </button>
                          <button
                            className="btn btn-outline-primary m-3"
                            onClick={(e) => {
                              e.preventDefault();
                              setChangePosterZer(!changePosterZer);
                              setPosterZer("");
                              setPosterZerName("");
                            }}
                          >
                            {changePosterZer
                              ? "حذف آپلود فیلم"
                              : "عوض کردن فیلم"}
                          </button>

                          {changeMovieZer && (
                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagZer">
                                انتخاب فیلم(زیر نویس) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagZer"
                                  type="file"
                                  className="upload-Zer-movie"
                                  onChange={() => uploadMovieZer()}
                                />
                                <br />
                                <span id="imageName">
                                  {movieZerName && movieZerName}
                                </span>
                              </label>
                            </div>
                          )}
                          {changePosterZer && (
                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagPosterZer">
                                انتخاب پوستر(زیر نویس شده) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagPosterZer"
                                  type="file"
                                  className="upload-Zer-poster"
                                  onChange={() => uploadPosterZer()}
                                />
                                <br />
                                <span id="imageName">
                                  {posterZerName && posterZerName}
                                </span>
                              </label>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="col-12 mt-3 text-center">
                        <button
                          className="btn btn-outline-primary m-3"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsUploadMovieZer(!isUploadMovieZer);
                            setMovieZerName("");
                            setMovieZer("");
                            setPosterZerName("");
                            setPosterZer("");
                          }}
                        >
                          {isUploadMovieZer
                            ? "حذف آپلود فیلم(زیر نویس شده)"
                            : "آپلود فیلم(زیر نویس شده)"}
                        </button>

                        {isUploadMovieZer && (
                          <>
                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagUploadZer">
                                انتخاب فیلم(زیر نویس) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagUploadZer"
                                  type="file"
                                  className="upload-Zer-movie"
                                  onChange={() => uploadMovieZer()}
                                />
                                <br />
                                <span id="imageName">
                                  {movieZerName && movieZerName}
                                </span>
                              </label>
                            </div>

                            <div className="div-file-admin-new-movie m-auto mt-3">
                              <label for="inputTagUploadPosterZer">
                                انتخاب پوستر(فیلم زیر نویس) <br />
                                <AiOutlinePlus className="icon-file-admin-movie" />
                                <input
                                  id="inputTagUploadPosterZer"
                                  type="file"
                                  className="upload-Zer-poster"
                                  onChange={() => uploadPosterZer()}
                                />
                                <br />
                                <span id="imageName">
                                  {posterZerName && posterZerName}
                                </span>
                              </label>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}

                {typeMovie === "سریال" && (
                  <>
                    <div className="input-lable-edit-movie-parent">
                      <label className="lable-edit-movie">زمان سریال: </label>
                      <Input
                        className="input-admin-edit-movie"
                        id="time"
                        type="number"
                        value={item.time}
                        element="input"
                        validation={[requiredValidator(), maxValidator(5)]}
                        onInputHandler={onInputHandler}
                        placeholder="زمان سریال(دقیقه)"
                      />
                    </div>
                    {item.season.map((seasons) => (
                      <>
                        <div
                          className="col-12 mt-3 d-flex flex-wrap"
                          style={{ justifyContent: "center" }}
                        >
                          <Accordion style={{ width: "300px" }}>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>
                                فصل {seasons.title}
                              </Accordion.Header>
                              {seasons.parts.map((part, index) => (
                                <Accordion.Body
                                  className="accordin-body-edit-movie-parent"
                                  onClick={() => {
                                    setIsShowSwalEditPart(true);
                                    setInfoEditPart(part);
                                    isShowSwalEditPart && showAlertSwalEditPart()
                                  }}
                                >
                                  <div className="accordin-body-edit-movie">
                                    <div className="d-flex">
                                      <span className="number-accordin-body-edit-movie">
                                        {index + 1}
                                      </span>
                                      <p className="m-2">{part.title}</p>
                                    </div>
                                    <span>{part.time}</span>
                                  </div>
                                </Accordion.Body>
                              ))}
                              <Accordion.Body
                                className="accordin-body-edit-movie-parent"
                                onClick={() => {
                                  setIsShowNewPart(!isShowNewPart);
                                  setSeasonSelectedInfo(seasons);
                                  setIsShowEditSeasonName(false);
                                }}
                              >
                                <div className="accordin-body-edit-movie">
                                  <div className="d-flex">
                                    <p className="m-2">
                                      {isShowNewPart
                                        ? "حذف افزودن قسمت"
                                        : "افزودن قسمت"}
                                    </p>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <button
                            className="btn btn-outline-primary m-2"
                            style={{ maxHeight: "50px" }}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsShowNewPart(false);
                              setIsShowEditSeasonName(!isShowEditSeasonName);
                              setSeasonSelectedInfo(seasons);
                            }}
                          >
                            {isShowEditSeasonName
                              ? "حذف ویرایش نام فصل"
                              : "ویرایش نام فصل"}
                          </button>
                        </div>
                        {isShowEditSeasonName &&
                          seasonSelectedInfo.id === seasons.id && (
                            <div className="col-12 mb-4 form-season-edit-movie">
                              <div className="input-lable-edit-movie-parent">
                                <label className="lable-edit-movie">
                                  نام فصل:
                                </label>
                                <Input
                                  type="text"
                                  className="input-admin-edit-movie"
                                  id="seasonTitle"
                                  value={seasonSelectedInfo.title}
                                  element="input"
                                  validation={[
                                    requiredValidator(),
                                    minValidator(2),
                                    maxValidator(30),
                                  ]}
                                  onInputHandler={onInputHandlerEditSeasonName}
                                  placeholder="نام فصل"
                                />
                              </div>
                            </div>
                          )}
                        {isShowNewPart &&
                          seasonSelectedInfo.id === seasons.id && (
                            <div className="col-12 mt-3 form-season-edit-movie">
                              <div className="input-lable-edit-movie-parent">
                                <Input
                                  type="text"
                                  className="input-admin-edit-movie-no-lable"
                                  id="titlePart"
                                  element="input"
                                  validation={[
                                    requiredValidator(),
                                    minValidator(2),
                                    maxValidator(30),
                                  ]}
                                  onInputHandler={onInputHandlerNewPart}
                                  placeholder="نام قسمت"
                                />
                              </div>

                              <div className="input-lable-edit-movie-parent">
                                <Input
                                  type="text"
                                  className="input-admin-edit-movie-no-lable"
                                  id="partsShortName"
                                  element="input"
                                  validation={[
                                    requiredValidator(),
                                    minValidator(2),
                                    maxValidator(30),
                                  ]}
                                  onInputHandler={onInputHandlerNewPart}
                                  placeholder="لینک"
                                />
                              </div>

                              <div className="input-lable-edit-movie-parent">
                                <Input
                                  type="text"
                                  className="input-admin-edit-movie-no-lable"
                                  id="partsTime"
                                  element="input"
                                  validation={[
                                    requiredValidator(),
                                    minValidator(5),
                                    maxValidator(5),
                                  ]}
                                  onInputHandler={onInputHandlerNewPart}
                                  placeholder="زمان قسمت(00:00)"
                                />
                              </div>
                            </div>
                          )}
                      </>
                    ))}

                    <button
                      className="btn btn-outline-primary mt-3"
                      style={{ width: "300px" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsShowNewSeason(!isShowNewSeason);
                      }}
                    >
                      {isShowNewSeason
                        ? `حذف افزودن فصل جدید`
                        : `افزودن فصل جدید`}
                    </button>

                    {isShowSwalEditPart && (
                      <>
                        <dir
                          className="col-12 mt-3 d-flex flex-wrap"
                          style={{ justifyContent: "space-around" }}
                        >
                          <div className="input-lable-edit-movie-parent">
                            <label className="lable-edit-movie">
                              نام قسمت:
                            </label>
                            <Input
                              type="text"
                              className="input-admin-edit-movie"
                              id="title"
                              value={infoEditPart.title}
                              element="input"
                              validation={[
                                requiredValidator(),
                                minValidator(3),
                                maxValidator(30),
                              ]}
                              onInputHandler={onInputHandlerEditParts}
                              placeholder="نام قسمت"
                            />
                          </div>
                          <div className="input-lable-edit-movie-parent">
                            <label className="lable-edit-movie">
                              زمان قسمت:
                            </label>
                            <Input
                              type="text"
                              className="input-admin-edit-movie"
                              id="time"
                              value={infoEditPart.time}
                              element="input"
                              validation={[
                                requiredValidator(),
                                minValidator(1),
                                maxValidator(10),
                              ]}
                              onInputHandler={onInputHandlerEditParts}
                              placeholder="زمان قسمت"
                            />
                          </div>
                          <div className="input-lable-edit-movie-parent">
                            <label className="lable-edit-movie">لینک:</label>
                            <Input
                              type="text"
                              className="input-admin-edit-movie"
                              id="shortName"
                              value={infoEditPart.shortName}
                              element="input"
                              validation={[
                                requiredValidator(),
                                minValidator(3),
                                maxValidator(30),
                              ]}
                              onInputHandler={onInputHandlerEditParts}
                              placeholder="لینک"
                            />
                          </div>
                          <br />
                          <div className="col-12 text-center mt-3">
                            <label className="lable-edit-movie mb-2">
                              فیلم:
                            </label>
                            <br />
                            <video
                              src={infoEditPart.srcVideo}
                              poster={`/Assets/${infoEditPart.posterVideo}`}
                              style={{ width: "300px" }}
                              controls
                            ></video>
                          </div>

                          {isShowUploadEditSerialDouble && (
                            <div className="col-12 text-center mt-3">
                              <div className="div-file-admin-new-movie m-auto mt-3">
                                <label for="inputTagUploadEditSerialDouble">
                                  انتخاب فیلم <br />
                                  <AiOutlinePlus className="icon-file-admin-movie" />
                                  <input
                                    id="inputTagUploadEditSerialDouble"
                                    type="file"
                                    className="upload-edit-serial-double"
                                    onChange={() => uploadEditSerialDouble()}
                                  />
                                  <br />
                                  <span id="imageName">
                                    {editSerialDoubleName &&
                                      editSerialDoubleName}
                                  </span>
                                </label>
                              </div>
                            </div>
                          )}

                          {isShowUploadEditSerialDoublePoster && (
                            <div className="col-12 text-center mt-3">
                              <div className="div-file-admin-new-movie m-auto mt-3">
                                <label for="inputTagUploadEditSerialDoublePoster">
                                  انتخاب پوستر <br />
                                  <AiOutlinePlus className="icon-file-admin-movie" />
                                  <input
                                    id="inputTagUploadEditSerialDoublePoster"
                                    type="file"
                                    className="upload-edit-serial-double-poster"
                                    onChange={() => uploadEditPosterSerialDouble()}
                                  />
                                  <br />
                                  <span id="imageName">
                                    {editSerialDoublePosterName &&
                                      editSerialDoublePosterName}
                                  </span>
                                </label>
                              </div>
                            </div>
                          )}

                          <div className="btn-edit-part-edit-movie-parent col-12 mt-4">
                            <div>
                              <button
                                className="btn btn-outline-primary ms-3"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsShowUploadEditSerialDouble(
                                    !isShowUploadEditSerialDouble
                                  );
                                  setEditSerialDouble("");
                                  setEditSerialDoubleName("");
                                }}
                              >
                                {isShowUploadEditSerialDouble
                                  ? "حذف آپلود ویدیو"
                                  : "آپلود ویدیو جدید"}
                              </button>
                              <button
                                className="btn btn-outline-primary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsShowUploadEditSerialDoublePoster(
                                    !isShowUploadEditSerialDoublePoster
                                  );
                                  setEditSerialDoublePoster("");
                                  setEditSerialDoublePosterName("");
                                }}
                              >
                                {isShowUploadEditSerialDoublePoster
                                  ? "حذف آپلود پوستر"
                                  : "آپلود پوستر جدید"}
                              </button>
                            </div>

                            <button
                              className="btn btn-outline-danger"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsShowSwalEditPart(false);
                                setInfoEditPart(null);
                              }}
                            >
                              حذف تغییرات این قسمت
                            </button>
                          </div>
                        </dir>
                      </>
                    )}

                    {isShowNewSeason && (
                      <>
                        <div className="col-12 mt-3 form-season-edit-movie">
                          <div className="input-lable-edit-movie-parent">
                            <Input
                              type="text"
                              className="input-admin-edit-movie-no-lable"
                              id="seasonTitle"
                              element="input"
                              validation={[
                                requiredValidator(),
                                minValidator(2),
                                maxValidator(30),
                              ]}
                              onInputHandler={onInputHandlerSeason}
                              placeholder="نام فصل"
                            />
                          </div>
                          <div className="input-lable-edit-movie-parent">
                            <Input
                              type="text"
                              className="input-admin-edit-movie-no-lable"
                              id="seasonPartsTitle"
                              element="input"
                              validation={[
                                requiredValidator(),
                                minValidator(2),
                                maxValidator(30),
                              ]}
                              onInputHandler={onInputHandlerSeason}
                              placeholder="نام قسمت(قسمت اول)"
                            />
                          </div>
                          <div className="input-lable-edit-movie-parent">
                            <Input
                              type="text"
                              className="input-admin-edit-movie-no-lable"
                              id="seasonPartsTime"
                              element="input"
                              validation={[
                                requiredValidator(),
                                minValidator(5),
                                maxValidator(5),
                              ]}
                              onInputHandler={onInputHandlerSeason}
                              placeholder="زمان قسمت(00:00)"
                            />
                          </div>
                          <div className="input-lable-edit-movie-parent">
                            <Input
                              type="text"
                              className="input-admin-edit-movie-no-lable"
                              id="seasonPartsShortName"
                              element="input"
                              validation={[
                                requiredValidator(),
                                minValidator(2),
                                maxValidator(30),
                              ]}
                              onInputHandler={onInputHandlerSeason}
                              placeholder="لینک"
                            />
                          </div>

                            <div className="col-12 text-center mt-3">
                              <div className="div-file-admin-new-movie m-auto mt-3">
                                <label for="inputTagUploadNewSeason">
                                  انتخاب فیلم <br />
                                  <AiOutlinePlus className="icon-file-admin-movie" />
                                  <input
                                    id="inputTagUploadNewSeason"
                                    type="file"
                                    className="upload-new-season"
                                    onChange={() => uploadNewSeason()}
                                  />
                                  <br />
                                  <span id="imageName">
                                    {fileNewSeasonName &&
                                      fileNewSeasonName}
                                  </span>
                                </label>
                              </div>
                            </div>

                            <div className="col-12 text-center mt-3">
                              <div className="div-file-admin-new-movie m-auto mt-3">
                                <label for="inputTagUploadNewSeasonPoster">
                                  انتخاب پوستر <br />
                                  <AiOutlinePlus className="icon-file-admin-movie" />
                                  <input
                                    id="inputTagUploadNewSeasonPoster"
                                    type="file"
                                    className="upload-new-season-poster"
                                    onChange={() => uploadNewSeasonPoster()}
                                  />
                                  <br />
                                  <span id="imageName">
                                    {fileNewSeasonPosterName &&
                                      fileNewSeasonPosterName}
                                  </span>
                                </label>
                              </div>
                            </div>
                        </div>
                      </>
                    )}
                  </>
                )}
                <div className="col-12 mt-5">
                  <button className="btn btn-outline-primary w-100" onClick={(e)=>{
                    e.preventDefault()
                  }}>دخیره تغییرات</button>
                </div>
              </form>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
