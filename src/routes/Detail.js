import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AlertDialogSlide from "components/detail/AlertDialogSlide";
import AlertDialogDelete from "components/detail/AlertDialogDelete";
import AppBar from "components/common/AppBar";
import InfoText from "components/common/InfoText";
import { GetData, Test } from "store/api.js";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { jsonLoading, offer, favoriteList } = useSelector((state) => state);
  const target = offer.find((e) => e.id === id);
  const [favorite, setFavorite] = useState(false);
  const link = window.location.search?.substr(1);

  //const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));
  const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));
  console.log(user_array.memb_id);

  //최근본페이지 저장
  useEffect(() => {
    localStorage.getItem("xgolfViewHistory")
      ? localStorage.getItem("xgolfViewHistory")
      : localStorage.setItem("xgolfViewHistory", JSON.stringify([]));

    const array = JSON.parse(localStorage.getItem("xgolfViewHistory"));
    const idx = array.findIndex((e) => e === id);

    if (idx >= 0) {
      array.splice(idx, 1);
    }
    array.unshift(id);
    console.log(array);
    if (array.length > 5) {
      array.pop();
    }
    localStorage.setItem("xgolfViewHistory", JSON.stringify(array));
  }, []);

  useEffect(() => {
    if (favoriteList.map((el) => String(el)).includes(id)) {
      setFavorite(true);
      //console.log("관심");
      //console.log(id);

      // const formData = new FormData();
      // const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));
      // formData.append("userId", user_array.memb_id);
      // formData.append("idx", `${id}`);
      //
      // const setFavoriteAction = async () => {
      //   try {
      //
      //     const response =  await axios({
      //       method: "POST",
      //       url: `https://phpup.xgolf.com/outtour/apply.php`,
      //       mode: "cors",
      //       headers: {
      //         "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
      //       },
      //       data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
      // }).then(function(response){
      // console.log("result:"+response.data.offerList);

      //dispatch(changeOffer(response.data.offerList));

      // })
      //
      //
      //
      //
      //    } catch (e) {
      //
      //    }
      //  };
      //  setFavoriteAction();
    } else {
      setFavorite(false);
      //console.log("무관심");

      // const formData = new FormData();
      // const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));
      // formData.append("userId", user_array.memb_id);
      // formData.append("idx", `${id}`);
      //
      // const setFavoriteAction = async () => {
      //   try {
      //
      //     const response =  await axios({
      //       method: "POST",
      //       url: `https://phpup.xgolf.com/outtour/apply.php`,
      //       mode: "cors",
      //       headers: {
      //         "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
      //       },
      //       data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
      // }).then(function(response){
      // console.log("result:"+response.data.offerList);

      //dispatch(changeOffer(response.data.offerList));

      // })
      //
      //
      //
      //
      //    } catch (e) {
      //
      //    }
      //  };
      //  setFavoriteAction();
    }
  }, [favoriteList]);
  const onChangeFavorite = (e) => {
    //console.log((e));
    let atypeSub = "";

    setFavorite((state) => !state);

    console.log("state:" + `${favorite}`);

    //let favoriteSatus = `${favorite}`;

    //console.log("favoriteSatus:"+favoriteSatus);

    // if(favoriteSatus==true)
    // {
    //     atypeSub = "add";
    //     console.log("-----------------1:"+atypeSub);
    // }
    // else
    // {
    //     atypeSub = "minus";
    //     console.log("-----------------2:"+atypeSub);
    // }

    //return false;
    const formData = new FormData();
    const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));
    formData.append("userId", user_array.memb_id);
    formData.append("idx", `${id}`);
    formData.append("atypeSub", `${favorite}`);
    formData.append("atype", "F");

    const setFavoriteAction = async () => {
      try {
        const response = await axios({
          method: "POST",
          url: `https://phpup.xgolf.com/outtour/apply.php`,
          mode: "cors",
          headers: {
            "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
          },
          data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
        }).then(function (response) {
          console.log("result:" + response.data);
        });
      } catch (e) {}
    };
    setFavoriteAction();
  };

  useEffect(() => {
    console.log(favorite);
    if (favorite) {
      //console.log("관심");
      //console.log(`${id}`);
    } else {
      //console.log("무관심");
      //console.log(`${id}`);
    }
  }, [favorite]);

  const onRemove = () => {
    console.log(`${id} 삭제요`);
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
        height: 62vw;
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
      {!jsonLoading ? (
        "로딩중"
      ) : (
        <>
          <AppBar title="해외 회원권" link={link} />
          <Container maxWidth="sm" id="container">
            <DetailBox>
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                autoplay={{
                  delay: 12500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {target.img.map((el, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={el} alt="" className="swiper-lazy" />
                      <div className="swiper-lazy-preloader"></div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Box className="section" sx={{ position: "relative" }}>
                {/* 상품텍스트 컴퍼넌트 */}
                <InfoText
                  country={target.country}
                  region={target.region}
                  label={target.label}
                  commaPrice={target.commaPrice}
                  personal={target.personal}
                  date={target.date}
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
                    favorite ? (
                      <FavoriteIcon color="red" />
                    ) : (
                      <FavoriteBorderIcon />
                    )
                  }
                  onClick={onChangeFavorite}
                >
                  <Typography
                    color="text.black"
                    sx={{ mt: "0 !important", fontSize: 14, pr: 0.4 }}
                  >
                    관심등록
                  </Typography>
                </Button>
              </Box>
              <Box className="divider"></Box>
              <Box className="section">
                {target.info.골프장정보 && (
                  <dl>
                    <dt>
                      <strong>골프장 정보</strong>
                    </dt>
                    <dd
                      dangerouslySetInnerHTML={{
                        __html: target.info.골프장정보,
                      }}
                    ></dd>
                  </dl>
                )}
                {target.info.회원권정보 && (
                  <dl>
                    <dt>
                      <strong>회원권 정보</strong>
                    </dt>
                    <dd
                      dangerouslySetInnerHTML={{
                        __html: target.info.회원권정보,
                      }}
                    ></dd>
                  </dl>
                )}
                {target.info.등록자 && (
                  <dl>
                    <dt>
                      <strong>등록자 정보</strong>
                    </dt>
                    <dd>
                      <ul className="user_info">
                        {target.info.등록자.업체명 && (
                          <li>
                            <strong>업체명</strong>
                            <span>{target.info.등록자.업체명}</span>
                          </li>
                        )}

                        {target.info.등록자.담당자명 && (
                          <li>
                            <strong>담당자명</strong>
                            <span>{target.info.등록자.담당자명}</span>
                          </li>
                        )}

                        {target.info.등록자.연락처 && (
                          <li>
                            <strong>연락처</strong>
                            <a href={`tel:${target.info.등록자.연락처}`}>
                              {target.info.등록자.연락처}
                            </a>
                          </li>
                        )}
                      </ul>
                    </dd>
                  </dl>
                )}
              </Box>

              {user_array.memb_id != "" &&
              target.add_id == user_array.memb_id ? (
                <Stack direction="row" spacing={1} sx={{ mx: "25px" }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="green"
                    size="large"
                    sx={{ borderRadius: 2 }}
                    onClick={() => navigate(`/modify/${id}`)}
                  >
                    수정 하기
                  </Button>
                  {/* 삭제 하기 */}
                  <AlertDialogDelete />
                </Stack>
              ) : null}

              {user_array.memb_id != target.add_id ? (
                <Stack direction="row" spacing={1} sx={{ mx: "25px" }}>
                  <AlertDialogSlide />
                </Stack>
              ) : null}

              {/* <Box sx={{ pb: "44px" }}>
          <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
            <Button
              fullWidth
              variant="contained"
              color="green"
              size="large"
              sx={{ borderRadius: 0 }}
            >
              상담 문의
            </Button>
          </Box>
        </Box> */}
            </DetailBox>
          </Container>
        </>
      )}
    </>
  );
}
