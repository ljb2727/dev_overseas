import React from "react";
import { Typography } from "@mui/material";

export function SubTitle({ children, fontSize = "16px", ml = "0px" }) {
  return (
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: "bold",
        fontSize: fontSize,
        mb: "10px",
        ml: ml,
        lineHeight: "1",
      }}
    >
      {children}
    </Typography>
  );
}

export default SubTitle;
