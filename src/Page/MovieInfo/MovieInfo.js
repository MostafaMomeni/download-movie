import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import TopInfoMovie from "../../Components/TopInfoMovie/TopInfoMovie";
import { GoVideo } from "react-icons/go";
import { FaComment } from "react-icons/fa";
import CommentBox from "../../Components/Comment/CommentBox/CommentBox";
import SendComment from "../../Components/Comment/SendComment/SendComment";
import Data from "../../Data";
import Pagination from "../../Components/Pagination/Pagination";

export default function MovieInfo() {
  const params = useParams().shortName;
  const paramsParts = useParams().serialParts;
  const localUser = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState(Data);
  const [filterData, setFilterData] = useState([]);
  const [showFilterDataComments, setShowFilterDataComments] = useState([]);
  const [showSerialParts, setShowSerialParts] = useState([]);
  const [filterSerialParts, setFilterSerialParts] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) => item.shortName === params);
    setFilterData(filteredData);

    if (paramsParts !== "0") {
      filteredData.map((item) => {
        setShowSerialParts(item.season)
        item.season.map(seasons => {
            seasons.parts.filter(part =>part.shortName == paramsParts && setFilterSerialParts(part))           
            
        })
    });
    }
  }, [params , paramsParts]);


  return (
    <>
      <Container>
        {filterData.length &&
          filterData.map((item) => (
            <>
              <TopInfoMovie {...item} />

              <div className="mt-5">
                <h2 className="px-2 h2-title-box-movie-movie-info">تیزر</h2>
                <div className="teaser-movie-info-parent">
                  <div className="teaser-movie-info">
                    <video
                      className="main-video-movie-info"
                      src={`${item.srcTeaserVideo}`}
                      poster={`/Assets/${item.posterTeaserVideo}`}
                      controls
                    ></video>
                  </div>
                  <div className="teaser-text-movie-info-parent">
                    <div className="teaser-text-movie-info">
                      <div className="header-teaser-text-movie-info">
                        <GoVideo className="icon-text-teaser-movie-info" />
                        <h2>داستان فیلم</h2>
                      </div>
                      <p>{item.storyMovie}</p>
                    </div>
                    <div className="teaser-text-movie-info">
                      <div className="header-teaser-text-movie-info">
                        <GoVideo className="icon-text-teaser-movie-info" />
                        <h2>درباره فیلم</h2>
                      </div>
                      <p>{item.aboutMovie}</p>
                    </div>
                  </div>
                </div>
              </div>

              {item.hdCam === 1 && (
                <div className="hd-cam-box-movie-info-parent">
                  <p className="text-danger">
                    توجه کنید که فیلم کیفیت پرده ای HD Cam است
                  </p>
                </div>
              )}

              <div className="download-box-movie-info-parent">
                {item.srcVideo && (
                  <div className="download-box-movie-info mb-3">
                    <div>دوبله فارسی</div>
                    <div>
                      <a
                        href={item.srcVideo}
                        download={true}
                        className="btn btn-outline-warning px-4"
                      >
                        دانلود
                      </a>
                    </div>
                  </div>
                )}
                {item.srcTeaserVideo && (
                  <div className="download-box-movie-info">
                    <div>زیر نویس</div>
                    <div>
                      <a
                        href={item.srcTeaserVideo}
                        download={true}
                        className="btn btn-outline-warning px-4"
                      >
                        دانلود
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <h2 className="px-2 h2-title-box-movie-movie-info">فیلم</h2>
                <div className="main-movie-movie-info-parent">
                  {showSerialParts.length ? (
                    <>
                      <div className="movie-movie-info">
                        <video
                          className="main-video-movie-info"
                          src={filterSerialParts.srcVideo}
                          poster={`/Assets/${filterSerialParts.posterVideo}`}
                          controls
                        ></video>
                      </div>
                      <div className="accordion-season-movie-info-parent">
                        <h3>فصل ها</h3>
                        <div className="accordion-season-movie-info">
                          <Accordion>
                            {showSerialParts.map((part, index) => (
                              <Accordion.Item
                                eventKey={index}
                                className={`accordion-item-season-movie-info `}
                              >
                                <Accordion.Header>
                                  فصل {part.title}
                                </Accordion.Header>
                                {part.parts.map((subPart, index) => (
                                  <Accordion.Body className={`${paramsParts === subPart.shortName && "active-accordion-season"}`}>
                                    <div className={`item-season-movie-info `}>
                                      <div className="right-item-season-movie-info">
                                        <span>{index + 1}</span>
                                        <Link
                                          to={`/movie-info/${params}/${subPart.shortName}/1`}
                                        >
                                          {subPart.title}
                                        </Link>
                                      </div>
                                      <div>{subPart.time}</div>
                                    </div>
                                  </Accordion.Body>
                                ))}
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="movie-movie-info">
                        <video
                          className="main-video-movie-info"
                          src={item.srcVideo}
                          poster={`/Assets/${item.posterVideo}`}
                          controls
                        ></video>
                      </div>
                  )}
                </div>
              </div>

              <div className="comments my-4">
                <div className="d-flex">
                  <FaComment className="ms-2 mt-1" />
                  <h2>دیدگاه ها</h2>
                </div>
                {localUser ? (
                  <SendComment />
                ) : (
                  <div className="my-3">
                    <p className="alert alert-warning">
                      برای ارسال نظر ابتدا در سایت ثبت نام کنید
                    </p>
                  </div>
                )}
                {item.comments.length ? (
                  <>
                    {showFilterDataComments.reverse().map((item) => (
                      <>
                        <CommentBox {...item} />
                      </>
                    ))}

                    <Pagination
                      path={`/movie-info/${params}`}
                      items={item.comments}
                      itemsCount={3}
                      setShowMovies={setShowFilterDataComments}
                    />
                  </>
                ) : null}
              </div>
            </>
          ))}
      </Container>
    </>
  );
}
