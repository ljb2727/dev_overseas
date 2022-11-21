import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppBar from "components/common/AppBar.js";
import {
  styled,
  Box,
  Stack,
  CircularProgress,
  Chip,
  Typography,
  Container,
} from "@mui/material";
import { useSelector } from "react-redux";
import InfoText from "components/common/InfoText";

export default function SearchList() {
  let { keyword } = useParams();
  keyword = String(keyword).replaceAll(" ", "");

  const navigate = useNavigate();

  const { offer, jsonLoading } = useSelector((state) => state);
  const [filterOffer, setFilterOffer] = useState([]);

  let findLabel = [];
  let findCountry = [];
  let findRegion = [];

  let mergeList = [];
  useEffect(() => {
    setFilterOffer(offer);
  }, [jsonLoading]);

  findLabel = filterOffer.filter((item) => item.label.includes(keyword));
  findCountry = filterOffer.filter((item) => item.country.includes(keyword));
  findRegion = filterOffer.filter((item) => item.region.includes(keyword));

  mergeList = [...findLabel, ...findCountry, ...findRegion];
  console.log(mergeList);

  const StyleItem = styled(Box)`
    & .img_box {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      width: 120px;
      height: 120px;
      & img {
        vertical-align: top;
        width: 100%;
        height: 100%;
      }

      & p {
        display: flex;
        position: absolute;
        margin: 0;
        padding: 0;
        background: #000;
        color: #fff;
        width: 1.4em;
        height: 1.4em;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-bottom-right-radius: 4px;
      }
    }

    & .text_box {
      overflow: hidden;
    }
  `;

  function Item({
    id,
    index,
    label,
    price,
    personal,
    country,
    region,
    wave,
    thumbnail,
    commaPrice,
  }) {
    return (
      <StyleItem data-personal={personal} data-id={id}>
        <Stack direction="row" spacing={1}>
          <Box onClick={() => navigate(`/detail/${id}`)}>
            <Box className="img_box">
              <img src={thumbnail} alt={label} />
            </Box>
          </Box>

          <Box className="text_box">
            {/* 상품텍스트 컴퍼넌트 */}
            <InfoText
              mt="7px"
              country={country}
              region={region}
              label={label}
              commaPrice={commaPrice}
              personal={personal}
              wave={wave}
            />
          </Box>
        </Stack>
      </StyleItem>
    );
  }

  return (
    <>
      <AppBar title="검색 결과" />
      <Container maxWidth="sm" id="container">
        {!jsonLoading ? (
          <Box
            sx={{
              position: "fixed",
              transform: "translate(-50%,-50%)",
              top: "50%",
              left: "50%",
              overflow: "hidden",
            }}
          >
            {/* 로딩중 */}
            <CircularProgress size={60} color="green" />
          </Box>
        ) : mergeList.length ? (
          <Box
            className="section"
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              marginTop: "32px !important",
            }}
          >
            {mergeList.map((el, index) => {
              return (
                <Item
                  index={index}
                  key={el.id}
                  id={el.id}
                  label={el.label}
                  price={el.price}
                  commaPrice={el.commaPrice}
                  personal={el.personal}
                  country={el.country}
                  region={el.region}
                  wave={el.wave}
                  thumbnail={el.thumbnail}
                />
              );
            })}
          </Box>
        ) : (
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            검색결과가 없습니다.
          </Box>
        )}
      </Container>
    </>
  );
}
