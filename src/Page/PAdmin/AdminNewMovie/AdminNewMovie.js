import React, { useEffect, useState } from "react";
import "./AdminNewMovie.css";
import Input from "../../../Components/Form/Input";
import { useForm } from "../../../Hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../../Validators/Roules";
import Swal from "sweetalert2";
import { AiOutlinePlus } from "react-icons/ai";

export default function AdminNewMovie() {
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

  const [movieZerNevesName, setMovieZerNevesName] = useState(null);
  const [movieZerNeves, setMovieZerNeves] = useState(null);

  const [posterZerNevesName, setPosterZerNevesName] = useState(null);
  const [posterZerNeves, setPosterZerNeves] = useState(null);

  const [mainPosterName, setMainPosterName] = useState(null);
  const [mainPoster, setMainPoster] = useState(null);

  const [movieDoubleName, setMovieDoubleName] = useState(null);
  const [movieDouble, setMovieDouble] = useState(null);

  const [posterDoubleName, setPosterDoubleName] = useState(null);
  const [posterDouble, setPosterDouble] = useState(null);

  const [timeMovie, setTimeMovie] = useState("");
  const [hdCam, setHdCam] = useState("");

  const [doubleOrZerNevesMovie, setDoubleOrZerNevesMovie] = useState(null);
  const [typeMovie, setTypeMovie] = useState(null);

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

  const uploadMovieZer = () => {
    let inputImage = document.querySelector(".upload-zer-movie").files[0];
    if (inputImage) {
      setMovieZerNevesName(inputImage.name);
      setMovieZerNeves(inputImage);
    } else {
      setMovieZerNevesName("");
      setMovieZerNeves("");
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

  const uploadPosterZer = () => {
    let inputImage = document.querySelector(".upload-zer-poster").files[0];
    if (inputImage) {
      setPosterZerNevesName(inputImage.name);
      setPosterZerNeves(inputImage);
    } else {
      setPosterZerNevesName("");
      setPosterZerNeves("");
    }
  };

  const uploadMainPoster = () => {
    let inputImage = document.querySelector(".upload-main-poster").files[0];
    if (inputImage) {
      setMainPosterName(inputImage.name);
      setMainPoster(inputImage);
    } else {
      setMainPosterName("");
      setMainPoster("");
    }
  };

  useEffect(() => {
    setDoubleOrZerNevesMovie("");
  }, [typeMovie]);

  useEffect(() => {
    setMovieDoubleName("");
    setMovieDouble("");
    setMovieZerNevesName("");
    setMovieZerNeves("");
    setPosterZerNevesName("");
    setPosterZerNeves("");
    setPosterDoubleName("");
    setPosterDouble("");
  }, [doubleOrZerNevesMovie]);

  const submitHandler = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "فیلم شما با موفقیت اضافه شد",
      icon: "success",
      confirmButtonText: "بستن",
    }).then((res) => {
      if (res.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="admin-new-movie-parent">
        <h3>فیلم جدید</h3>
        <div className="admin-new-movie">
          <form className="">
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie"
              id="title"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="number"
              className="input-admin-new-movie"
              id="imdb"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie"
              id="text"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="number"
              className="input-admin-new-movie"
              id="year"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie"
              id="actors"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie"
              id="Director"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie"
              id="genre"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie"
              id="shortName"
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
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie"
              id="country"
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
            <div className="input-admin-new-movie-parent">
            <Input
              className="input-admin-new-movie textarea-admin-new-movie"
              id="storyMovie"
              element="textarea"
              validation={[requiredValidator(), minValidator(3)]}
              onInputHandler={onInputHandler}
              placeholder="داستان فیلم"
            />
            </div>
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie textarea-admin-new-movie"
              id="aboutMovie"
              element="textarea"
              validation={[requiredValidator(), minValidator(3)]}
              onInputHandler={onInputHandler}
              placeholder="درباره فیلم"
            />
            </div>
            <div className="input-admin-new-movie-parent">
            <Input
              type="text"
              className="input-admin-new-movie textarea-admin-new-movie"
              id="description"
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

            <div className="div-file-admin-new-movie mt-3">
              <label for="inputTagMainPoster">
                پوستر اصلی <br />
                <AiOutlinePlus className="icon-file-admin-movie" />
                <input
                  id="inputTagMainPoster"
                  type="file"
                  className="upload-main-poster"
                  onChange={() => uploadMainPoster()}
                />
                <br />
                <span id="imageName">
                  {mainPosterName && mainPosterName}
                </span>
              </label>
            </div>

            <div className="col-12 me-5 my-3">
              <label htmlFor="hdCam">کیفیت پرده هست</label>
              <input
                type="radio"
                value={1}
                id="hdCam"
                name="hdCam"
                className="me-1 ms-3"
                onChange={(e) => setHdCam(e.target.value)}
              />
              <label htmlFor="notHdCam">کیفیت پرده نیست</label>
              <input
                type="radio"
                value={0}
                id="notHdCam"
                name="hdCam"
                className="me-1 ms-3"
                onChange={(e) => setHdCam(e.target.value)}
              />
            </div>

            <div className="col-12 me-5 my-3">
              <label htmlFor="movie">فیلم</label>
              <input
                type="radio"
                value={"فیلم"}
                id="movie"
                name="movie-or-serial"
                className="me-1 ms-3"
                onChange={(e) => setTypeMovie(e.target.value)}
              />
              <label htmlFor="serial">سریال</label>
              <input
                type="radio"
                value={"سریال"}
                id="serial"
                name="movie-or-serial"
                className="me-1 ms-3"
                onChange={(e) => setTypeMovie(e.target.value)}
              />
            </div>

            {typeMovie === "فیلم" && (
              <>
              <div className="input-admin-new-movie-parent">
                <input
                  type="text"
                  className="input-admin-new-movie"
                  placeholder="زمان فیلم (دقیقه)"
                  onChange={(e) => setTimeMovie(e.target.value)}
                  />
                  </div>
                <div className="col-12 me-5 my-3">
                  <label htmlFor="double">دوبله شده</label>
                  <input
                    type="radio"
                    value={"دوبله"}
                    id="double"
                    name="double-or-zerNeves"
                    className="me-1 ms-3"
                    onChange={(e) => setDoubleOrZerNevesMovie(e.target.value)}
                  />
                  <label htmlFor="zerNeves">زیر نویس</label>
                  <input
                    type="radio"
                    value={"زیر نویس"}
                    id="zerNeves"
                    name="double-or-zerNeves"
                    className="me-1 ms-3"
                    onChange={(e) => setDoubleOrZerNevesMovie(e.target.value)}
                    />
                  <label htmlFor="double-zerNeves">آپلود هر دو</label>
                  <input
                    type="radio"
                    value={"دوبله زیر نویس"}
                    id="double-zerNeves"
                    name="double-or-zerNeves"
                    className="me-1 ms-3"
                    onChange={(e) => setDoubleOrZerNevesMovie(e.target.value)}
                    />
                  </div>
                  </>
                    )}

                {doubleOrZerNevesMovie === "دوبله" && (
                  <>
                    <div className="div-file-admin-new-movie">
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

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagDoublePoster">
                        پوستر فیلم (دوبله شده) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagDoublePoster"
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

                {doubleOrZerNevesMovie === "زیر نویس" && (
                  <>
                    <div className="div-file-admin-new-movie">
                      <label for="inputTagZer">
                        انتخاب فیلم(زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZer"
                          type="file"
                          className="upload-zer-movie"
                          onChange={() => uploadMovieZer()}
                        />
                        <br />
                        <span id="imageName">
                          {movieZerNevesName && movieZerNevesName}
                        </span>
                      </label>
                    </div>

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagZerPoster">
                        پوستر فیلم (زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZerPoster"
                          type="file"
                          className="upload-zer-poster"
                          onChange={() => uploadPosterZer()}
                        />
                        <br />
                        <span id="imageName">
                          {posterZerNevesName && posterZerNevesName}
                        </span>
                      </label>
                    </div>
                  </>
                )}

                {doubleOrZerNevesMovie === "دوبله زیر نویس" && (
                  <>
                    <div className="div-file-admin-new-movie">
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

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagDoublePoster">
                        پوستر فیلم (دوبله شده) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagDoublePoster"
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

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagZer">
                        انتخاب فیلم(زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZer"
                          type="file"
                          className="upload-zer-movie"
                          onChange={() => uploadMovieZer()}
                        />
                        <br />
                        <span id="imageName">
                          {movieZerNevesName && movieZerNevesName}
                        </span>
                      </label>
                    </div>

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagZerPoster">
                        پوستر فیلم (زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZerPoster"
                          type="file"
                          className="upload-zer-poster"
                          onChange={() => uploadPosterZer()}
                        />
                        <br />
                        <span id="imageName">
                          {posterZerNevesName && posterZerNevesName}
                        </span>
                      </label>
                    </div>
                  </>
                )}
            
            

            {typeMovie === "سریال" && (
              <>
                <div className="input-admin-new-movie-parent">
                <Input
                  type="text"
                  className="input-admin-new-movie"
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
                <div className="input-admin-new-movie-parent">
                <Input
                  type="text"
                  className="input-admin-new-movie"
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
                <div className="input-admin-new-movie-parent">
                <Input
                  type="text"
                  className="input-admin-new-movie"
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
                <div className="input-admin-new-movie-parent">
                <Input
                  type="text"
                  className="input-admin-new-movie"
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
                <div className="col-12 me-5 my-3">
                  <label htmlFor="double">دوبله شده</label>
                  <input
                    type="radio"
                    value={"دوبله"}
                    id="double"
                    name="double-or-zerNeves"
                    className="me-1 ms-3"
                    onChange={(e) => setDoubleOrZerNevesMovie(e.target.value)}
                  />
                  <label htmlFor="zerNeves">زیر نویس</label>
                  <input
                    type="radio"
                    value={"زیر نویس"}
                    id="zerNeves"
                    name="double-or-zerNeves"
                    className="me-1 ms-3"
                    onChange={(e) => setDoubleOrZerNevesMovie(e.target.value)}
                  />
                  <label htmlFor="double-zerNeves">آپلود هر دو</label>
                  <input
                    type="radio"
                    value={"دوبله زیر نویس"}
                    id="double-zerNeves"
                    name="double-or-zerNeves"
                    className="me-1 ms-3"
                    onChange={(e) => setDoubleOrZerNevesMovie(e.target.value)}
                  />
                </div>
                {doubleOrZerNevesMovie === "دوبله" && (
                  <>
                    <div className="div-file-admin-new-movie">
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

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagDoublePoster">
                        پوستر فیلم (دوبله شده) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagDoublePoster"
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

                {doubleOrZerNevesMovie === "زیر نویس" && (
                  <>
                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagZer">
                        انتخاب فیلم(زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZer"
                          type="file"
                          className="upload-zer-movie"
                          onChange={() => uploadMovieZer()}
                        />
                        <br />
                        <span id="imageName">
                          {movieZerNevesName && movieZerNevesName}
                        </span>
                      </label>
                    </div>

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagZerPoster">
                        پوستر فیلم (زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZerPoster"
                          type="file"
                          className="upload-zer-poster"
                          onChange={() => uploadPosterZer()}
                        />
                        <br />
                        <span id="imageName">
                          {posterZerNevesName && posterZerNevesName}
                        </span>
                      </label>
                    </div>
                  </>
                )}

                {doubleOrZerNevesMovie === "دوبله زیر نویس" && (
                  <>
                    <div className="div-file-admin-new-movie">
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

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagDoublePoster">
                        پوستر فیلم (دوبله شده) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagDoublePoster"
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

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagZer">
                        انتخاب فیلم(زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZer"
                          type="file"
                          className="upload-zer-movie"
                          onChange={() => uploadMovieZer()}
                        />
                        <br />
                        <span id="imageName">
                          {movieZerNevesName && movieZerNevesName}
                        </span>
                      </label>
                    </div>

                    <div className="div-file-admin-new-movie mt-3">
                      <label for="inputTagZerPoster">
                        پوستر فیلم (زیر نویس) <br />
                        <AiOutlinePlus className="icon-file-admin-movie" />
                        <input
                          id="inputTagZerPoster"
                          type="file"
                          className="upload-zer-poster"
                          onChange={() => uploadPosterZer()}
                        />
                        <br />
                        <span id="imageName">
                          {posterZerNevesName && posterZerNevesName}
                        </span>
                      </label>
                    </div>
                  </>
                )}
              </>
            )}
            <button
              className="btn btn-outline-primary w-100 m-4"
              onClick={(event) => submitHandler(event)}
              disabled={
                !formState.isFormValid ||
                typeMovie == "" ||
                hdCam == "" ||
                (typeMovie === "سریال" && !formStateSeason.isFormValid)
                // (doubleOrZerNevesMovie === "دوبله" && !movieDouble.name.length) ||
                // (doubleOrZerNevesMovie === "زیر نویس" && !movieZerNeves.name.length) ||
                // (doubleOrZerNevesMovie === "دوبله زیر نویس" && !movieDouble && !movieZerNeves)
              }
            >
              ثبت
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
