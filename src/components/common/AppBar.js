import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
export default function MainAppBar({
  title = "해외 골프장 회원권",
  type,
  link = "",
}) {
  const navigate = useNavigate();

  const checkLink = () => {
    console.log(link);
    link ? navigate(`/${link}`) : navigate(-1);
  };
  return (
    <>
      <Box
        sx={{
          "& .MuiToolbar-root": {
            minHeight: "49px",
          },
        }}
      >
        <AppBar
          position="fixed"
          color="white"
          elevation={0}
          sx={{
            borderBottom: "1px solid #cccccc",
          }}
        >
          <Toolbar variant="dense" sx={{ p: 0 }}>
            {type !== "hiddenIcon" && (
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                onClick={checkLink}
              >
                <ChevronLeftIcon />
              </IconButton>
            )}

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                pr: type === "hiddenIcon" ? 0 : 4,
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
}
