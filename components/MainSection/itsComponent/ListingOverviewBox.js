import React from 'react'
import {
    Avatar,
    Box,
    Grid,
    IconButton,
    Stack,
    Typography,
  } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chart from "../../CustomCharts/Chart";
function ListingOverviewBox({name,img,value,weekvalue,color,chartColor,data}) {
  return (
    <Stack
    sx={{
      background: color,
      width: "100%",
      borderRadius: "10px",
      padding: "10px",
      position: "relative",
    }}
    gap={0.5}
  >
    <Stack direction={"row"} gap={1} alignItems={"center"}>
      <Avatar
        sx={{ width: "30px", height: "30px", background: "#FFB6B6" }}
        // src=''
      />
      <Typography>{name}</Typography>
      <span style={{ flex: 1 }} />
      <IconButton size="small">
        <MoreVertIcon />
      </IconButton>
    </Stack>
    <Typography
      sx={{
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "600",
        color: "#2E2E2E",
      }}
    >
      {value}
    </Typography>
    <Typography
      sx={{ textAlign: "center", fontSize: "10px", color: "#9B9B9B" }}
    >
      {weekvalue} this week
    </Typography>
    <Box
      sx={{
        position: "absolute",
        height: "100px",
        width: "80px",
        right: "0px",
        top: "50px",
      }}
    >
      <Chart  chartColor={chartColor} Data={data}/>
    </Box>
  </Stack>
  )
}

export default ListingOverviewBox