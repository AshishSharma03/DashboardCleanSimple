import React from 'react'
import {
    Avatar,
    Box,
    Grid,
    IconButton,
    Stack,
    Typography,
  } from "@mui/material";
  import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import CustomLinearProgress from "../../CustomComponents/CustomLinearProgress";


function SaleProgressItems({title,subtitle,value,percent,color,backbarcolor,frontbarcolor,img}) {
  return (
    <Stack
    sx={{
      padding: "20px",
      width: "100%",
      background: color,
      borderRadius: "20px",
    }}
    flexDirection={"row"}
    alignItems={"center"}
    gap={1}
  >
    <Avatar />
    <Box sx={{ width: "40% " }}>
      <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "#656565" }}>
        {subtitle}
      </Typography>
    </Box>
    <Stack
      sx={{
        background: frontbarcolor,
        padding: "5px",
        borderRadius: "20px",
        color: "#fff",
        alignItem: "center",
      }}
      direction={"row"}
    >
      <ArrowUpwardRoundedIcon />
      <Typography>{percent}%</Typography>
    </Stack>
    <Box sx={{ width: "100%", position: "relative" }}>
      <CustomLinearProgress
        variant="determinate"
        value={value}
        backbarcolor={backbarcolor}
        frontbarcolor={frontbarcolor}
      />
    </Box>
  </Stack>
  )
}

export default SaleProgressItems