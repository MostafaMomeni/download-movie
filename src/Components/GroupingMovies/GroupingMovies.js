import React, { useEffect, useState } from "react";
import SeactionHeader from "../SeactionHeader/SeactionHeader";
import "./GroupingMovies.css";
import MovieBox from "../MovieBox/MovieBox";
import Data from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function GroupingMoves() {
  const [data, setData] = useState(Data);

  const [irani, setIrani] = useState([]);
  const [foreign, setForeign] = useState([]);
  const [serialIrani, setSerialIrani] = useState([]);

  useEffect(() => {
    let filterIraniFree = data.filter(
      (item) => item.country === "ایران" && item.free === 1
    );
    let filterForeign = data.filter((item) => item.country !== "ایران");
    let filterSerialIrani = data.filter(
      (item) => item.type === "سریال" && item.country === "ایران"
    );

    setIrani(filterIraniFree);
    setForeign(filterForeign);
    setSerialIrani(filterSerialIrani);
  }, []);

  return (
    <>
      <div className="grouping-moves-parent">
        <div>
          <SeactionHeader
            title="ایرانی رایگان"
            to="/category/empty_empty_ایران_empty_empty/1"
          />
          <div className="movie-box-desplay">
            <Swiper breakpoints={{
              100:{slidesPerView:2},
              576:{slidesPerView:2},
              768:{slidesPerView:3},
              992:{slidesPerView:4},
              1200:{slidesPerView:5},
            }} spaceBetween={30} className="mySwiper">
              {irani
                .reverse()
                .slice(0, 5)
                .map((item) => (
                  <SwiperSlide>
                    <MovieBox {...item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div>
          <SeactionHeader
            title="خارجی"
            to="/category/empty_empty_خارجی_empty_empty/1"
          />
          <div className="movie-box-desplay">
          <Swiper breakpoints={{
              100:{slidesPerView:2},
              576:{slidesPerView:2},
              768:{slidesPerView:3},
              992:{slidesPerView:4},
              1200:{slidesPerView:5},
            }} spaceBetween={30} className="mySwiper">
            {foreign
              .reverse()
              .slice(0, 5)
              .map((item) => (
                <SwiperSlide>
                    <MovieBox {...item} />
                  </SwiperSlide>
              ))}
              </Swiper>
          </div>
        </div>
        <div>
          <SeactionHeader
            title="سریال ایرانی رایگان"
            to="/category/سریال_empty_empty_empty_empty/1"
          />
          <div className="movie-box-desplay">
          <Swiper breakpoints={{
              100:{slidesPerView:2},
              576:{slidesPerView:2},
              768:{slidesPerView:3},
              992:{slidesPerView:4},
              1200:{slidesPerView:5},
            }} spaceBetween={30} className="mySwiper">
            {serialIrani
              .reverse()
              .slice(0, 5)
              .map((item) => (
                <SwiperSlide>
                <MovieBox {...item} />
              </SwiperSlide>
              ))}
              </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
