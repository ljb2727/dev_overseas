import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Tabs,
  Tab,
  Box,
  styled,
  Chip,
  Stack,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TabMenu from "components/common/TabMenu";
import InfoText from "components/common/InfoText";
export default function List() {
  const { offer, tabArray, jsonLoading } = useSelector((state) => state);
  const { mainTabArray, subTabArray } = tabArray;
  const [copyOffer, setCopyOffer] = useState([...offer]);
  const [mainTab, setMainTab] = useState(mainTabArray[0]);
  const [subTab, setSubTab] = useState(subTabArray[0]);

  console.log(jsonLoading);
  const params = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (params.type === "type1") {
      setMainTab(mainTabArray[0]);
    } else {
      setMainTab(mainTabArray[1]);
    }
  });
  useEffect(() => {
    console.log("탭 이펙트");
    filterItem(mainTab, subTab);
  }, [mainTab, subTab]);

  const filterItem = (mainTab, subTab) => {
    console.log(`@@@${mainTab} ${subTab}`);
    if (mainTab === mainTabArray[0]) {
      setCopyOffer(offer.filter((el) => el.personal == 'C' && el.country == subTab));
    } else {
      setCopyOffer(offer.filter((el) => el.personal == 'P' && el.country == subTab));
    }
  };

  const subChange = (event, newValue) => {
    setSubTab(newValue);
  };

  const GreenTab = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-flexContainer": { gap: "1em" },
    "& .MuiTab-root": { padding: "0" },
    "& .Mui-selected": {
      color: "#36ae37 !important",
      padding: "1em 0 !important",
    },
  }));

  const StyleItem = styled(Box)`
    & .img_box {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      width: 110px;
      height: 110px;
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
    wave,
    commaPrice,
    personal,
    country,
    region,
    thumbnail,
  }) {
    return (
      <StyleItem data-personal={personal} data-id={id}>
        <Stack direction="row" spacing={1}>
          <Box onClick={() => navigate(`/detail/${id}`)}>
            <Box className="img_box">
              <p className="count">{index + 1}</p>
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
              wave={wave}
              commaPrice={commaPrice}
            />
          </Box>
        </Stack>
      </StyleItem>
    );
  }

  return (
    <>
      <Container maxWidth="sm" id="container">
        <TabMenu />
        {/* <Tabs value={mainTab} variant="fullWidth" onChange={mainChange}>
        <Tab value={mainTabArray[0]} label={mainTabArray[0]} />
        <Tab value={mainTabArray[1]} label={mainTabArray[1]} />
      </Tabs> */}

        <GreenTab
          value={subTab}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          onChange={subChange}
          TabIndicatorProps={{
            sx: { backgroundColor: "#36ae37" },
          }}
          sx={{
            minHeight: "30px",
            borderBottom: "1px solid #cccccc",
            "& button": {
              //background: "blue",
              minWidth: "2em",
              minHeight: "30px",
              padding: "0.5em 1em",
            },
          }}
        >
          {subTabArray.map((el, index) => {
            return <Tab value={el} label={el} key={index} />;
          })}
        </GreenTab>
        {/* store 데이터 완료시 true */}
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
        ) : copyOffer.length ? (
          <Box
            className="section"
            sx={{
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              marginTop: "32px !important",
            }}
          >
            {copyOffer.map((el, index) => {
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
            매물이 없습니다.
          </Box>
        )}
      </Container>
    </>
  );
}
