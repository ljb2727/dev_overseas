import React, { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";

import Badge from "@mui/material/Badge";
import CancelIcon from "@mui/icons-material/Cancel";

import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
function ImageBox({ src, onClickRemove }) {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "72px",
            height: "72px",
            "& img": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <img src={src} alt="" />
        </Box>
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
}
function ImageUpload({ max = 1, id = "imageList" }) {
  const [imageList, setImageList] = useState([]);

  const onClickRemove = (src) => {
    console.log("remove");
    const copyImageList = [...imageList];
    setImageList(copyImageList.filter((e) => src !== e));
  };
  const onChange = (event) => {
    if (event.currentTarget.files?.[0]) {
      const file = event.currentTarget.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (event) => {
        setImageList((prev) => [...prev, event.target?.result]);
      };
    }
  };

  return (
    <>
      <input type="hidden" id={id} value={JSON.stringify(imageList)} />
      {imageList.map((el, index) => {
        return <ImageBox src={el} key={index} onClickRemove={onClickRemove} />;
      })}
      {imageList.length < max && (
        <Button
          component="label"
          sx={{
            width: "72px",
            height: "72px",
            backgroundColor: "#f5f5f5",
            border: "none",
          }}
        >
          <AddPhotoAlternateSharpIcon color="gray" />
          <input
            hidden
            accept="image/*"
            //multiple
            type="file"
            onChange={(event) => onChange(event)}
          />
        </Button>
      )}
    </>
  );
}

export default ImageUpload;
