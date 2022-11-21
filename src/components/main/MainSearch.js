import React from "react";
import Hangul from "hangul-js";
import { matchSorter } from "match-sorter";
import { TextField, Box, Autocomplete, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const { offer } = useSelector((state) => state);
  const navigate = useNavigate();
  console.log(offer);

  const filterOptions = (options, { inputValue }) => {
    return matchSorter(options, Hangul.disassemble(inputValue).join(""), {
      keys: ["chosung"],
    });
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        sx={{ mt: 1 }}
      >
        <Autocomplete
          sx={{
            "& fieldset": {
              borderColor: (theme) => theme.palette.common.borderColor,
            },
          }}
          disablePortal
          options={offer}
          fullWidth={true}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              label="원하는 회원권 검색"
              size="small"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          noOptionsText="검색된 회원권이 없습니다."
          getOptionLabel={(option) => option.label}
          onChange={(e, value) => navigate(`detail/${value.id}`)}
        />
      </Box>
    </>
  );
}
