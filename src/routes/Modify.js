import React, { useState, useEffect } from "react";
import axios from "axios";
import { changeOffer, setJsonLoading, setFavoriteList } from "store/index.js";
import { useDispatch } from "react-redux";

import {
  Box,
  MenuItem,
  Select,
  Stack,
  InputLabel,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  FormControl,
  Alert,
  TextField,
  InputAdornment,
  Container,
  Snackbar,
} from "@mui/material";
import SubTitle from "components/common/SubTitle.js";
import ImageUpload from "components/add/ImageUpload";
import Preview from "components/add/Preview";
import { useSelector } from "react-redux";
import TabMenu from "components/common/TabMenu";
import MultipleImageUpload from "components/add/MultipleImageUpload";
import { useParams, useNavigate } from "react-router-dom";
import AppBar from "components/common/AppBar";

export default function Add() {


  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [snackOpen, setSnackOpen] = useState(false);
  const { tabArray, defaultImage, offer, jsonLoading } = useSelector(
    (state) => state
  );
  const { thumbnail, detail } = defaultImage;

  const { id } = useParams();
  const target = offer.find((el) => el.id === id);


  //console.log(id);

  var form = document.getElementById("addForm");

  const [inputs, setInputs] = useState({
    offerType: "P",
    country: "",
    city: "",
    offerName: "",
    offerPrice: "",
    priceWave: "N",
    offerInfo: "",
    companyName: "",
    userName: "",
    userPhone: "",
    golfInfo: "",
    userImages: [],
    userThumbnail: [],
  });

  const {
    offerType,
    country,
    city,
    offerName,
    offerPrice,
    priceWave,
    offerInfo,
    companyName,
    userName,
    userPhone,
    golfInfo,
    userImages,
    userThumbnail,
  } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(`${value} / ${name}`);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(target);
    if (target !== undefined) {
      setInputs({
        ...inputs,
        country: target.country,
        offerType: target.personal.toLocaleUpperCase() === "P" ? "P" : "C",
        city: target.region,
        offerName: target.label,
        offerPrice: target.price,
        priceWave: target.wave.toLocaleUpperCase() === "Y" ? "Y" : "N",
        offerInfo: target.info.회원권정보,
        companyName: target.info.등록자.업체명,
        userName: target.info.등록자.담당자명,
        userPhone: target.info.등록자.연락처,
        golfInfo: target.info.골프장정보,
        userImages: target.img,
        userThumbnail: target.thumbnail,
      });
    }
  }, [jsonLoading]);

  const formValue = () => {
    const formValue = {
      구분: form.offerType.value,
      국가: form.country.value,
      도시: form.city.value,
      골프장명: form.offerName.value,
      입회금: form.offerPrice.value,
      물결표시: form.priceWave.value,
      회원권안내: form.offerInfo.value,
      업체명: form.companyName.value,
      담당자명: form.userName.value,
      연락처: form.userPhone.value,
      골프장소개: form.golfInfo.value,
      썸네일:
        JSON.parse(form.imageList1.value).length === 0
          ? [...thumbnail]
          : JSON.parse(form.imageList1.value),
      상세이미지:
        JSON.parse(form.imageList2.value).length === 0
          ? detail
          : JSON.parse(form.imageList2.value),
      등록일: new Date().toISOString().substr(0, 10).replaceAll("-", "."),
    };
    const { 구분, 국가, 도시, 골프장명, 입회금, 담당자명, 연락처 } = formValue;
    if (
      !구분 ||
      !국가 ||
      !도시 ||
      !골프장명 ||
      !입회금 ||
      !담당자명 ||
      !연락처
    ) {
      formValue.필수입력필요 = true;
    } else {
      formValue.필수입력필요 = false;
    }

    return formValue;
  };

  const checkRequired = () => {
    //const form = docuemnt.
    const { 필수입력필요 } = formValue();

    //필수 체크
    if (필수입력필요) {
      setSnackOpen(true);
      console.log(formValue());
      return true;
    }
  };

  const onSubmit = (event) => {
    if (checkRequired()) {
      return;
    }

    //document.getElementById("addForm").submit();
    const formData = new FormData(document.getElementById("addForm"));

    const val = document.getElementById("addForm");
    // console.log(val.offerType.value);
    // console.log(val.country.value);
    // console.log(val.city.value);
    // console.log(val.offerName.value);
    // console.log(val.offerPrice.value);
    // console.log(val.priceWave.value);
    // console.log(val.offerInfo.value);
    // console.log(val.companyName.value);
    // console.log(val.userName.value);
    // console.log(val.userPhone.value);
    // console.log(val.golfInfo.value);
    // console.log(val.imageList1.value);
    // console.log(val.imageList2.value);

    // formData.append("offerType",val.offerType.value);
    // formData.append("country",val.country.value);
    // formData.append("city",val.city.value);
    // formData.append("offerName",val.offerName.value);
    // formData.append("offerPrice",val.offerPrice.value);
    // formData.append("priceWave",val.priceWave.value);
    // formData.append("offerInfo",val.offerInfo.value);
    // formData.append("companyName",val.companyName.value);
    // formData.append("userName",val.userName.value);
    // formData.append("userPhone",val.userPhone.value);
    // formData.append("golfInfo",val.golfInfo.value);
    // //formData.append("imageList1", $("#fileT1").files.length && files[0].fileT1);
    // //formData.append("imageList2", $("#fileT2").$("#files.")length && files[0].fileT2);
    // formData.append("imageList1",document.getElementById("imgFile1").files);
    // formData.append("imageList2",document.getElementById("imgFile2").files);


    //console.log(document.getElementById("imgFile1").files[0].name);
    // console.log(document.getElementById("imgFile2").files[0].name);
    // console.log(document.getElementById("imgFile2").files[1].name);
    // console.log(document.getElementById("imgFile2").files[2].name);
    //console.log(document.getElementById("imgFile2").files[3].name);
    // console.log(document.getElementById("imgFile2").files[1].name);
    // console.log(document.getElementById("imgFile2").files[2].name);
    // console.log(document.getElementById("imgFile2").files[3].name);
    // console.log(document.getElementById("imgFile2").files[4].name);

    const user_array = JSON.parse(localStorage.getItem("xgolfUserData"));

    if(user_array.memb_id=='')
    {
      //location.href="xgolf://login?";

      console.log("로그인 처리해야한다.");
    }

    //console.log("idx:"+id);
    //return false;

    formData.append("userID", user_array.memb_id);
    formData.append("idx", id);
    const sendData = async () => {
      try {

        const response =  await axios({
          method: "POST",
          url: `https://phpup.xgolf.com/outtour/file_multi_upload_db_update.php`,
          mode: "cors",
          headers: {
            "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
          },
          data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
    }).then(function(response){
   	//console.log("result:"+response.data);

    dispatch(changeOffer(response.data.offerList));

    navigate(`/detail/${response.data.otms_idx}`)
   })




      } catch (e) {

      }
    };
    sendData();




    console.log("submit");
    console.log(formValue());
  };

  return (
    <>
      <AppBar title="해외 회원권" />
      <Container maxWidth="sm" id="container">
        <Box
          component="form"
          id="addForm"
          sx={{
            ".no_basis": {
              flexBasis: "0 !important",
            },

            "& .MuiList-root": {
              p: 0,
            },

            "& .MuiBox-root": {
              flexGrow: "1",
            },
          }}
        >
          <Box className="section">
            <List
              dense
              sx={{
                px: 1,
              }}
            >
              <SubTitle>회원권 정보</SubTitle>
              <ListItem disableGutters>
                <Box>
                  <RadioGroup
                    row
                    name="offerType"
                    value={offerType}
                    onChange={onChange}
                  >
                    <FormControlLabel
                      required
                      value="C"
                      control={<Radio color="green" />}
                      label="분양"
                      sx={{ m: 0 }}
                    />
                    <FormControlLabel
                      value="P"
                      control={<Radio color="green" />}
                      label="개인"
                      sx={{ m: 0, ml: 2 }}
                    />
                  </RadioGroup>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      국가 선택(필수)
                    </InputLabel>
                    <Select
                      value={country}
                      label="국가 선택(필수)"
                      onChange={onChange}
                      name="country"
                      sx={{ minWidth: "120px" }}
                    >
                      {tabArray.subTabArray.map((el, index) => {
                        return (
                          <MenuItem value={el} key={index}>
                            {el}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      fullWidth
                      label="도시 또는 지역명 입력(필수)"
                      name="city"
                      onChange={onChange}
                      value={city}
                    ></TextField>
                  </FormControl>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box>
                  <TextField
                    size="small"
                    fullWidth
                    label="골프장명 또는 회원권명 입력(필수)"
                    name="offerName"
                    onChange={onChange}
                    value={offerName}
                  ></TextField>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box>
                  <TextField
                    size="small"
                    fullWidth
                    label="입회금 숫자만 입력(필수) 예) 800"
                    name="offerPrice"
                    type="number"
                    onChange={onChange}
                    value={offerPrice}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">만원</InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "14px", mt: "7px" }}
                    color="text.gray"
                  >
                    ※ 입회금 최저가 1개만 입력(VAT포함)
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disableGutters sx={{ my: "15px" }}>
                <ListItemText sx={{ flex: "0 0 auto", mr: 2 }}>
                  입회금 물결 표시(~) 여부
                </ListItemText>
                <Box>
                  <RadioGroup
                    row
                    name="priceWave"
                    onChange={onChange}
                    value={priceWave}
                  >
                    <FormControlLabel
                      value="Y"
                      control={<Radio color="green" />}
                      label="있음"
                      sx={{ m: 0 }}
                    />
                    <FormControlLabel
                      value="N"
                      control={<Radio color="green" />}
                      label="없음"
                      sx={{ m: 0, ml: 2 }}
                    />
                  </RadioGroup>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <TextField
                  size="small"
                  fullWidth
                  multiline
                  rows={7}
                  name="offerInfo"
                  onChange={onChange}
                  value={offerInfo}
                  placeholder={`회원권 안내 내용을 입력 하세요.
※ 입력 추천 정보
1. 회원권 등급 : GOLD, VIP 등
2. 회원적용 : 기명1인+무기명1인 등
3. 입회금 : 880만원, 1,320만원 등
4. 기간   5. 연회비   6. 양도/양수
7. 회원 일일 체류비   8. 회원 혜택`}
                ></TextField>
              </ListItem>
            </List>
          </Box>
          <Box className="divider" />
          <Box className="section">
            <List dense sx={{ px: 1 }}>
              <SubTitle>등록자 정보</SubTitle>
              <ListItem disableGutters>
                <Box>
                  <TextField
                    size="small"
                    label="업체명 입력"
                    fullWidth
                    name="companyName"
                    onChange={onChange}
                    value={companyName}
                  ></TextField>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box>
                  <TextField
                    size="small"
                    label="이름 입력(필수)"
                    fullWidth
                    name="userName"
                    onChange={onChange}
                    value={userName}
                  ></TextField>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box>
                  <TextField
                    size="small"
                    type="number"
                    label="숫자만 입력(필수)"
                    name="userPhone"
                    fullWidth
                    onChange={onChange}
                    value={userPhone}
                  ></TextField>
                </Box>
              </ListItem>
            </List>
          </Box>
          <Box className="divider" />
          <Box className="section">
            <List dense sx={{ px: 1 }}>
              <SubTitle>골프장 정보 </SubTitle>
              <ListItem
                disableGutters
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <TextField
                  size="small"
                  fullWidth
                  multiline
                  rows={6}
                  name="golfInfo"
                  onChange={onChange}
                  value={golfInfo}
                  placeholder={`골프장 소개 내용을 입력 하세요.
※ 입력 추천 정보
1. 규모 : 18홀 72파 6,999야드 등
2. 부대시설 : 골프텔, 드라이빙레인지, 레스토랑, 프로샵 등
3. 위치 : 나리타 공항에서 1시간 10분 등
4. 기타정보`}
                ></TextField>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "0 !important",
                }}
              >
                <ListItemText className="no_basis">
                  썸네일 이미지 등록
                </ListItemText>
                <Box sx={{ display: "flex" }}>
                  <MultipleImageUpload
                    id="imageList1"
                    max="1"
                    img={userThumbnail}
                  />
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "0 !important",
                }}
              >
                <ListItemText className="no_basis">
                  상세 이미지 등록 (최대 5장 가능)
                </ListItemText>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {/* <ImageUpload max="5" id="imageList2" /> */}
                  <MultipleImageUpload id="imageList2" img={userImages} />
                </Box>
              </ListItem>
            </List>
            <Typography sx={{ fontSize: 14, mt: "25px" }} color="text.gray">
              ※ XGOLF는 회원권 페이지에서 발생하는 사고 및 해당 게시물 내 회원
              간 이루어진 거래에 대해서는 어떠한 법적 책임도 지지 않음을
              알려드립니다.
              <br />
              ※해외 회원권 등록 시 연락처가 노출 됨을 동의 합니다.
              <br />※ 허위 글,유해광고, 홍보, 상이한 게시물 등으로 등록된 내용은
              관리자 권한으로 동의 없이 삭제 및 이용이 제한될 수 있습니다.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ mx: "25px" }}>
            <Preview
              formValue={formValue}
              checkRequired={checkRequired}
              onSubmit={onSubmit}
            />

            <Button
              fullWidth
              color="green"
              variant="contained"
              size="large"
              onClick={() => onSubmit()}
            >
              수정
            </Button>
          </Stack>

          <Snackbar
            open={snackOpen}
            autoHideDuration={2000}
            onClose={() => setSnackOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              onClose={() => setSnackOpen(false)}
              severity="error"
              sx={{ width: "100%" }}
            >
              필수 입력 사항을 적어주세요.
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  );
}
