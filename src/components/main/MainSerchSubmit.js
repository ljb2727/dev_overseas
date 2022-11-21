import React, { useState, useEffect, useRef } from "react";
import { Snackbar, IconButton, Alert, InputBase, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material/TextField";
export default function MainSearchSubmit() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);

  const inputRef = useRef();

  const searchInput = (event) => {
    console.log(inputValue);

    if (inputValue === "") {
      setSnackOpen(true);

      event.preventDefault();
      return;
    }
    navigate(`/search/${inputValue}`);
    event.preventDefault();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #191919",
        }}
        onSubmit={(event) => searchInput(event)}
      >
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          onClick={(event) => searchInput(event)}
        >
          <img src="https://image.xgolf.com/file/2022/1109/202211095762551ljb2727.png" />
        </IconButton>

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="지역, 골프장, 회원권명 검색"
          value={inputValue}
          onInput={(event) => setInputValue(event.target.value)}
        />

        {inputValue !== "" && (
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            onClick={(event) => setInputValue("")}
          >
            <CloseIcon />
          </IconButton>
        )}
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
          검색어를 입력해주세요.
        </Alert>
      </Snackbar>
    </>
  );
}
