import * as React from "react";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

export default function NowLoading() {
  return (
    <Box
      sx={{ width: "100%", position: "fixed", top: "0", left: "0", right: "0" }}
    >
      <LinearProgress color="green" />
    </Box>
  );
}
