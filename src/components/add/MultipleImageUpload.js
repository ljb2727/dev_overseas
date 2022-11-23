import React, { useState, useEffect } from "react";
import { Badge, Snackbar, Alert, IconButton, Box, Button } from "@mui/material";

import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const ImageBox = ({ src, onClickRemove, max }) => {
  return (
    <>
      <Box
        className={`${Number(max) > 1 ? "multiple" : ""}`}
        sx={{
          flexGrow: "0 !important",
          width: "72px",
          height: "72px",
          border: "1px solid #c4c4c4",
          borderRadius: "5px",
          position: "relative",
          "&::after": {
            content: '""',
            display: "block",
          },

          "& img": {
            width: "100%",
            height: "70px",
          },
          "& .MuiButtonBase-root": {
            p: 0,
            m: 0,
          },
        }}
      >
        <img src={src} alt="" />
        <Badge
          sx={{
            background: "#fff",
            position: "absolute",
            top: "6px",
            right: "6px",
          }}
          badgeContent={
            <CancelIcon
              sx={{
                background: "#fff",
                overflow: "hidden",
                borderRadius: "100%",
              }}
              onClick={() => onClickRemove(src)}
            />
          }
        />
      </Box>
    </>
  );
};
export default function MultipleImageUpload({ id, max = 5, img = "" }) {
  const [snackOpen, setSnackOpen] = useState(false);
  max = Number(max);
  const [detailImgs, setDetailImgs] = useState([]);

  useEffect(() => {
    if (img !== undefined || img !== null) {
      setDetailImgs([...img]);
    }
  }, [img]);

  const onClickRemove = (src) => {
    console.log("remove");

    console.log(src.match("https"));

    if (src.match("https")) {
      console.log(src);
      console.log(id);

      const formData = new FormData();
      formData.append("file_url", src);

      const delImg = async () => {
        try {
          const response = await axios({
            method: "POST",
            url: `https://phpup.xgolf.com/outtour/file_del.php`,
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
      delImg();
    }

    const copyImageList = [...detailImgs];
    setDetailImgs(copyImageList.filter((e) => src !== e));
  };
  const checkMax = (e) => {
    if (detailImgs.length >= max) {
      console.log("max");
      setSnackOpen(true);

      e.preventDefault();
      return;
    }
  };
  const handleImageUpload = (e) => {
    const fileArr = e.target.files;

    if (!fileArr.length) {
      return;
    }

    let fileURLs = [];
    let file;
    let filesLength = fileArr.length > max ? max : fileArr.length;
    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        const sum = [...detailImgs, ...fileURLs];
        setDetailImgs(sum.slice(0, max));
      };
      reader.readAsDataURL(file);
    }
    //console.log(filesLength);
  };

  return (
    <>
      <input type="hidden" id={id} value={JSON.stringify(detailImgs)} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          "& .multiple:first-of-type::after": {
            content: '"대표 사진"',
            display: "flex",
            position: "absolute",
            left: 0,
            right: 0,
            fontSize: "12px",
            justifyContent: "center",
            padding: "2px",
            bottom: "-1px",
            backgroundColor: "#000000",
            color: "#ffffff",
            overflow: "hidden",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          },
        }}
      >
        <Button
          component="label"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "72px",
            height: "72px",
            backgroundColor: "#f5f5f5",
            border: "none",
          }}
          onClick={(e) => checkMax(e)}
        >
          <AddPhotoAlternateSharpIcon color="gray" />
          <input
            hidden
            type="file"
            id={Number(max) > 1 ? "imgFile2" : "imgFile1"}
            name={Number(max) > 1 ? "imageList2[]" : "imageList1[]"}
            multiple={Number(max) > 1 ? true : false}
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onInput={handleImageUpload}
            key={Date.now()}
          />
          <span style={{ fontSize: "12px", whiteSpace: "nowrap" }}>
            {`${detailImgs.length}`} / {`${max}`}
          </span>
        </Button>
        {detailImgs !== undefined &&
          detailImgs.map((el, idx) => (
            <ImageBox
              key={idx}
              src={el}
              max={max}
              onClickRemove={onClickRemove}
            />
          ))}
      </Box>
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
          최대 등록 이미지 수를 초과 했습니다.
        </Alert>
      </Snackbar>
    </>
  );
}
