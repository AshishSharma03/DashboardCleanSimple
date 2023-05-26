import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
function BoxTittle({ titleName, needMenu, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        height: "100%",
        alignItems: "center",
      }}
    >
      <Box sx={{ background: color, padding: "10px", borderRadius: "2px" }} />
      <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
        {titleName}
      </Typography>

      {needMenu ? (
        <Select
          value={"Last 7 Days"}
          sx={{ fontSize: "10px", height: "30px", borderRadius: "30px" }}
        >
          <MenuItem value={"Last 7 Days"}>Last 7 days</MenuItem>
        </Select>
      ) : (
        ""
      )}
    </Box>
  );
}

export default BoxTittle;
