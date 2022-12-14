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
        offerInfo: target.info.???????????????,
        companyName: target.info.?????????.?????????,
        userName: target.info.?????????.????????????,
        userPhone: target.info.?????????.?????????,
        golfInfo: target.info.???????????????,
        userImages: target.img,
        userThumbnail: target.thumbnail,
      });
    }
  }, [jsonLoading]);

  const formValue = () => {
    const formValue = {
      ??????: form.offerType.value,
      ??????: form.country.value,
      ??????: form.city.value,
      ????????????: form.offerName.value,
      ?????????: form.offerPrice.value,
      ????????????: form.priceWave.value,
      ???????????????: form.offerInfo.value,
      ?????????: form.companyName.value,
      ????????????: form.userName.value,
      ?????????: form.userPhone.value,
      ???????????????: form.golfInfo.value,
      ?????????:
        JSON.parse(form.imageList1.value).length === 0
          ? [...thumbnail]
          : JSON.parse(form.imageList1.value),
      ???????????????:
        JSON.parse(form.imageList2.value).length === 0
          ? detail
          : JSON.parse(form.imageList2.value),
      ?????????: new Date().toISOString().substr(0, 10).replaceAll("-", "."),
    };
    const { ??????, ??????, ??????, ????????????, ?????????, ????????????, ????????? } = formValue;
    if (
      !?????? ||
      !?????? ||
      !?????? ||
      !???????????? ||
      !????????? ||
      !???????????? ||
      !?????????
    ) {
      formValue.?????????????????? = true;
    } else {
      formValue.?????????????????? = false;
    }

    return formValue;
  };

  const checkRequired = () => {
    //const form = docuemnt.
    const { ?????????????????? } = formValue();

    //?????? ??????
    if (??????????????????) {
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

      console.log("????????? ??????????????????.");
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
            "Content-Type": "multipart/form-data", // Content-Type??? ????????? ????????? ????????? ??????.
          },
          data: formData, // data ???????????? ????????? ???????????? ?????? formData ????????? ?????? ????????? ??????.
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
      <AppBar title="?????? ?????????" />
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
              <SubTitle>????????? ??????</SubTitle>
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
                      label="??????"
                      sx={{ m: 0 }}
                    />
                    <FormControlLabel
                      value="P"
                      control={<Radio color="green" />}
                      label="??????"
                      sx={{ m: 0, ml: 2 }}
                    />
                  </RadioGroup>
                </Box>
              </ListItem>
              <ListItem disableGutters>
                <Box>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      ?????? ??????(??????)
                    </InputLabel>
                    <Select
                      value={country}
                      label="?????? ??????(??????)"
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
                      label="?????? ?????? ????????? ??????(??????)"
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
                    label="???????????? ?????? ???????????? ??????(??????)"
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
                    label="????????? ????????? ??????(??????) ???) 800"
                    name="offerPrice"
                    type="number"
                    onChange={onChange}
                    value={offerPrice}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">??????</InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "14px", mt: "7px" }}
                    color="text.gray"
                  >
                    ??? ????????? ????????? 1?????? ??????(VAT??????)
                  </Typography>
                </Box>
              </ListItem>
              <ListItem disableGutters sx={{ my: "15px" }}>
                <ListItemText sx={{ flex: "0 0 auto", mr: 2 }}>
                  ????????? ?????? ??????(~) ??????
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
                      label="??????"
                      sx={{ m: 0 }}
                    />
                    <FormControlLabel
                      value="N"
                      control={<Radio color="green" />}
                      label="??????"
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
                  placeholder={`????????? ?????? ????????? ?????? ?????????.
??? ?????? ?????? ??????
1. ????????? ?????? : GOLD, VIP ???
2. ???????????? : ??????1???+?????????1??? ???
3. ????????? : 880??????, 1,320?????? ???
4. ??????   5. ?????????   6. ??????/??????
7. ?????? ?????? ?????????   8. ?????? ??????`}
                ></TextField>
              </ListItem>
            </List>
          </Box>
          <Box className="divider" />
          <Box className="section">
            <List dense sx={{ px: 1 }}>
              <SubTitle>????????? ??????</SubTitle>
              <ListItem disableGutters>
                <Box>
                  <TextField
                    size="small"
                    label="????????? ??????"
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
                    label="?????? ??????(??????)"
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
                    label="????????? ??????(??????)"
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
              <SubTitle>????????? ?????? </SubTitle>
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
                  placeholder={`????????? ?????? ????????? ?????? ?????????.
??? ?????? ?????? ??????
1. ?????? : 18??? 72??? 6,999?????? ???
2. ???????????? : ?????????, ?????????????????????, ????????????, ????????? ???
3. ?????? : ????????? ???????????? 1?????? 10??? ???
4. ????????????`}
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
                  ????????? ????????? ??????
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
                  ?????? ????????? ?????? (?????? 5??? ??????)
                </ListItemText>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {/* <ImageUpload max="5" id="imageList2" /> */}
                  <MultipleImageUpload id="imageList2" img={userImages} />
                </Box>
              </ListItem>
            </List>
            <Typography sx={{ fontSize: 14, mt: "25px" }} color="text.gray">
              ??? XGOLF??? ????????? ??????????????? ???????????? ?????? ??? ?????? ????????? ??? ??????
              ??? ???????????? ????????? ???????????? ????????? ?????? ????????? ?????? ?????????
              ??????????????????.
              <br />
              ????????? ????????? ?????? ??? ???????????? ?????? ?????? ?????? ?????????.
              <br />??? ?????? ???,????????????, ??????, ????????? ????????? ????????? ????????? ?????????
              ????????? ???????????? ?????? ?????? ?????? ??? ????????? ????????? ??? ????????????.
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
              ??????
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
              ?????? ?????? ????????? ???????????????.
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  );
}
