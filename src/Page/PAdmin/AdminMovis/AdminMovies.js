import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./AdminMovies.css";
import Data from "../../../Data";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default function AdminMovies() {
  const [data, setData] = useState(Data);

  const columns = [
    { field: "id", headerName: "شناسه", width: 120 },
    {
      field: "cover",
      headerName: "عکس",
      width: 150,
      renderCell: (params) => {
        return (
          <img
            src={`/Assets/${params.value}`}
            alt="movie-image"
            className="img-admin-movies"
          />
        );
      },
    },
    { field: "title", headerName: "نام", width: 130 },
    { field: "type", headerName: "نوع", width: 130 },
    {
      field: "actions",
      headerName: "دسترسی",
      width: 300,
      editable: false,
      renderCell: (params) => {
        return (
          <div>

            <button
              className="btn btn-outline-primary me-1"
              onClick={() => showSwalInfo(params.id)}
            >
              جزییات
            </button>
            <Link to={`/p-admin/edit-movie/${params.row.shortName}`} className="btn btn-outline-primary me-1"
            >
              ویرایش
              </Link>

            <button
              className="btn btn-outline-danger me-1"
              onClick={() => deleteHandler(params.id)}
              >
              حذف
            </button>
          </div>
        );
      },
    },
  ];

  const showSwalInfo = (id) => {
    let filterData = data.filter((item) => item.id === id);

    filterData.map((item) => {
      const MySwal = withReactContent(Swal);

      MySwal.fire({
        title: "جزییات فیلم",
        confirmButtonText: "بستن",
        html: (
          <>
            <p>
              نام فیلم:{" "}
              <span className="red-color-admin-movie">{item.title}</span>
            </p>
            {item.text && (
              <p>
                متن: <span className="red-color-admin-movie">{item.text}</span>
              </p>
            )}
            <p>
              امتیاز: <span className="red-color-admin-movie">{item.imdb}</span>
            </p>
            <p>
              سال تولید:{" "}
              <span className="red-color-admin-movie">{item.year}</span>
            </p>
            <p>
              توضیح کوتاه:{" "}
              <span className="red-color-admin-movie">{item.description}</span>
            </p>
            <p>
              بازیگران:{" "}
              <span className="red-color-admin-movie">{item.Actors}</span>
            </p>
            <p>
              کارگردان:{" "}
              <span className="red-color-admin-movie">{item.Director}</span>
            </p>
            <p>
              سبک: <span className="red-color-admin-movie">{item.genre}</span>
            </p>
            <p>
              لینک:{" "}
              <span className="red-color-admin-movie">{item.shortName}</span>
            </p>
            <p>
              فیلم یا سریال:{" "}
              <span className="red-color-admin-movie">{item.type}</span>
            </p>
            <p>
              کشور سازنده:{" "}
              <span className="red-color-admin-movie">{item.country}</span>
            </p>
            <p>
              دوبله یا زیر نویس:{" "}
              <span className="red-color-admin-movie">{item.double}</span>
            </p>
            <p>
              ذاستان فیلم:{" "}
              <span className="red-color-admin-movie">{item.storyMovie}</span>
            </p>
            <p>
              درباره فیلم:{" "}
              <span className="red-color-admin-movie">{item.aboutMovie}</span>
            </p>
            <p>
              زمان فیلم:{" "}
              <span className="red-color-admin-movie">{item.time} دقیقه</span>
            </p>
            <p>
              کیفیت پرده:{" "}
              <span className="red-color-admin-movie">
                {item.hdCam === 1 ? "هست" : "نیست"}
              </span>
            </p>
            {item.season && (
              <>
                <p>فصل ها:</p>
                {item.season.map((seasons) => {
                  return (
                    <>
                      <Dropdown data-bs-theme="dark" className="mb-3">
                        <Dropdown.Toggle
                          id="dropdown-button-dark-example1"
                          variant="dark"
                        >
                          فصل {seasons.title}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="drop-down-menu-swal-admin-movies">
                          {seasons.parts.map((part) => {
                            return (
                              <>
                                <Dropdown.Item
                                  onClick={() => showSwalSeasons(part)}
                                >
                                  {part.title}
                                </Dropdown.Item>
                              </>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  );
                })}
              </>
            )}
            <p>فیلم دوبله: </p>
            <video
              src={item.srcVideo}
              className="video-admin-movies"
              controls
            ></video>
            {item.srcSubtitleVideo && (
              <>
                <p>فیلم زیر نویس: </p>
                <video
                  src={item.srcSubtitleVideo}
                  className="video-admin-movies"
                  controls
                ></video>
              </>
            )}
            <p>پوستر فیلم:</p>
            <img
              src={`/Assets/${item.posterVideo}`}
              alt={item.title}
              className="img-swal-admin-movies"
            />
            <p>تیزر فیلم: </p>
            <video
              src={item.srcTeaserVideo}
              className="video-admin-movies"
              controls
            ></video>
            <p>پوستر تیزر فیلم: </p>
            <img
              src={`/Assets/${item.posterTeaserVideo}`}
              alt={item.title}
              className="img-swal-admin-movies"
            />
          </>
        ),
      });
    });
  };

  const showSwalSeasons = (id) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "قسمت فصل انتخابی",
      confirmButtonText: "بستن",
      html: (
        <>
          <p>
            نام قسمت: <span className="red-color-admin-movie">{id.title}</span>
          </p>
          <p>
            زمان: <span className="red-color-admin-movie">{id.time}</span>
          </p>
          <p>
            لینک: <span className="red-color-admin-movie">{id.shortName}</span>
          </p>
          <p>فیلم این قسمت: </p>
          <video
            src={id.srcVideo}
            className="video-admin-movies"
            controls
          ></video>
        </>
      ),
    });
  };

  const deleteHandler = (id) => {
    Swal.fire({
      title: "آیا از حذف اطمینان دارید؟",
      text: "پس از حذف تمام اطلاعات مربوط به این فیلم پاک می شود",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله حذف کن",
      cancelButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "فیلم با موفقیت حذف شد!",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
    <h3>همه فیلم ها</h3>
      <div style={{ width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </div>
    </>
  );
}
