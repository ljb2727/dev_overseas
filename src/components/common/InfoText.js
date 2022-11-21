import React from "react";
import { Stack, Chip, Typography } from "@mui/material";

export default function InfoText({
  mt = "0px",
  country = "",
  region = "",
  label = "",
  commaPrice = "",
  personal,
  date,
  wave,
}) {
  return (
    <>
      <Stack direction="column" spacing={0.5} sx={{ mt: mt }}>
        <div>
          <Chip label={`${country} ${region}`} color="primary" size="small" />
        </div>
        <Typography
          variant="body1"
          noWrap
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: 1.2,
            mt: "10px !important",
          }}
        >{`${label}`}</Typography>
        <Typography
          variant="body1"
          color="text.blue"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: 1,
            mt: "5px !important",
          }}
        >
          {`${commaPrice}만원`}
          {wave && "~"}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mt: "10px !important" }}
        >
          {personal !== undefined && (
            <Typography
              variant="body1"
              color="text.gray"
              sx={{ fontSize: "14px", lineHeight: 1 }}
            >
              {`${personal ? "개인" : "분양"}`}
            </Typography>
          )}

          {date && (
            <Typography
              variant="body2"
              color="text.gray"
            >{`등록일 ${date}`}</Typography>
          )}
        </Stack>
      </Stack>
    </>
  );
}
