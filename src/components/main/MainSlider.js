import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { styled } from "@mui/material/styles";

import { Chip, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import InfoText from "components/common/InfoText";

const CusSwiper = styled(Swiper)`
  background-color: white;
  & .img {
    overflow: hidden;
    border-radius: 4px;
  }
  & .swiper-slide {
    overflow: hidden;
    border-radius: 5px;
    & img {
      width: 100%;
      height: 51.45vw;
      vertical-align: top;
    }
  }
`;

export default function MainSlider() {
  const { offer } = useSelector((state) => state);
  const navigation = useNavigate();

  console.log(offer);
  return (
    <>
      <CusSwiper
        slidesPerView={"1.2"}
        //freeMode={true}
        centeredSlides={true}
        spaceBetween={10}
        // autoplay={{
        //   delay: 15000,
        //   disableOnInteraction: false,
        // }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        {offer
          .filter((item) => item.best)
          .map((el, index) => {
            console.log(el);
            const { country, region, label, commaPrice, personal, wave } = el;
            return (
              <SwiperSlide
                onClick={() => navigation(`/detail/${el.id}`)}
                key={el.id}
              >
                <div className="img">
                  <img src={`${el.img[0]}`} alt="" />
                </div>

                {/* 상품텍스트 컴퍼넌트 */}
                <InfoText
                  mt="15px"
                  country={country}
                  region={region}
                  label={label}
                  commaPrice={commaPrice}
                  personal={personal}
                  wave={wave}
                />
              </SwiperSlide>
            );
          })}
      </CusSwiper>
    </>
  );
}
