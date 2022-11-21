import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function TabMenu() {
  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();
  const [value, setValue] = useState(false);

  const watchTab = () => {
    if (params.type === "type1") {
      setValue("C");
    } else if (params.type === "type2") {
      setValue("P");
    } else if (pathname === "/add") {
      setValue("등록");
    } else {
      setValue("메인");
    }
  };

  useEffect(() => {
    watchTab();
  });

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case "C":
        navigate("/list/type1");
        break;
      case "P":
        navigate("/list/type2");
        break;
      case "메인":
        navigate("/");
        break;
      case "등록":
        navigate("/add");
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        TabIndicatorProps={{ style: { transition: "none" } }}
        sx={{ borderBottom: "1px solid #ccc" }}
      >
        <Tab value="메인" label="메인" />
        <Tab value="C" label="분양" />
        <Tab value="P" label="개인" />
        <Tab value="등록" label="등록" />
      </Tabs>
    </Box>
  );
}
