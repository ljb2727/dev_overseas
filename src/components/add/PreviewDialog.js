import React, { useState } from "react";

import {
  Divider,
  Box,
  styled,
  Stack,
  Chip,
  Typography,
  Button,
  Container,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import InfoText from "components/common/InfoText";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function PreviewDialog({ formValue, handleClose, onSubmit }) {
  //const { id } = useParams();
  // 구분: form.offerType.value,
  // 국가: form.country.value,
  // 도시: form.city.value,
  // 골프장명: form.offerName.value,
  // 입회금: form.offerPrice.value,
  // 물결표시: form.priceWave.value,
  // 회원권안내: form.offerInfo.value,
  // 업체명: form.companyName.value,
  // 담당자명: form.userName.value,
  // 연락처: form.userPhone.value,
  // 골프장소개: form.golfInfo.value,
  // 썸네일: JSON.parse(form.imageList1.value),
  // 상세이미지: JSON.parse(form.imageList2.value),
  // 등록일: new Date().toISOString().substr(0, 10).replaceAll("-", "."),

  const {
    구분,
    국가,
    도시,
    골프장명,
    입회금,
    물결표시,
    회원권안내,
    업체명,
    담당자명,
    연락처,
    골프장소개,
    썸네일,
    상세이미지,
    등록일,
  } = formValue();

  const [favorite, setFavorite] = useState(false);

  const onChangeFavorite = (e) => {
    setFavorite((state) => !state);
  };

  const DetailBox = styled(Box)`
    font-size: 0.875rem;

    & .MuiTypography-root {
      margin-top: 5px;
    }
    & .MuiTypography-root.title {
      margin-top: 10px;
    }
    & dl {
      display: flex;
      text-align: left;
      flex-direction: column;
    }
    & dt {
      font-size: 16px;
      flex-shrink: 0;
      font-weight: bold;
      margin-top: 25px;
      margin-bottom: 10px;
    }
    & dl:first-of-type > dt {
      margin-top: 0;
    }

    & dd {
      margin: 0;
      font-size: 14px;
      line-height: 1.8;
    }
    & .mySwiper {
      & img {
        width: 100%;
        height: 51.64vw;
      }
    }
    & .btn_box {
      margin: 1rem;
    }
    .user_info li {
      font-size: 14px;
      display: flex;
      & strong {
        flex-basis: 5em;
      }
      & a {
        color: #000000;
        text-decoration: underline;
      }
    }
  `;

  return (
    <>
      <Container maxWidth="sm" id="container">
        <DetailBox>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {상세이미지.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={e} alt={i} className="swiper-lazy" />
                  <div className="swiper-lazy-preloader"></div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box className="section" sx={{ position: "relative" }}>
            <InfoText
              country={국가}
              region={도시}
              label={골프장명}
              commaPrice={Number(입회금).toLocaleString("ko-KR")}
              personal={구분}
              date={등록일}
              wave={물결표시}
            />

            <Button
              size="small"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                fontSize: "0.875rem",
                "& span": {
                  marginLeft: "0",
                },
              }}
              variant="text"
              endIcon={
                favorite ? <FavoriteIcon color="red" /> : <FavoriteBorderIcon />
              }
              onClick={onChangeFavorite}
            >
              관심등록
            </Button>
          </Box>
          <Box className="divider"></Box>
          <Box className="section">
            {골프장소개 && (
              <dl>
                <dt>
                  <strong>골프장 정보</strong>
                </dt>
                <dd>
                  <pre dangerouslySetInnerHTML={{ __html: 골프장소개 }}></pre>
                </dd>
              </dl>
            )}
            {회원권안내 && (
              <dl>
                <dt>
                  <strong>회원권 정보</strong>
                </dt>
                <dd>
                  <pre dangerouslySetInnerHTML={{ __html: 회원권안내 }}></pre>
                </dd>
              </dl>
            )}
            <dl>
              <dt>
                <strong>등록자 정보</strong>
              </dt>
              <dd>
                <ul className="user_info">
                  {업체명.length > 0 && (
                    <li>
                      <strong>업체명</strong>
                      <span>{업체명}</span>
                    </li>
                  )}
                  <li>
                    <strong>담당자명</strong>
                    <span>{담당자명}</span>
                  </li>
                  <li>
                    <strong>연락처</strong>
                    <a href={`tel:${연락처}`}>{연락처}</a>
                  </li>
                </ul>
              </dd>
            </dl>
          </Box>
          <Stack direction="row" spacing={1} sx={{ mx: "25px" }}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              color="green"
              onClick={() => handleClose()}
            >
              닫기
            </Button>
          </Stack>
        </DetailBox>
      </Container>
    </>
  );
}
