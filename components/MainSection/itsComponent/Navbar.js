import React from 'react'
import {
    Avatar,
    Box,
    IconButton,
    Input,
    Stack,
  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Navbar() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <Stack
      gap={1}
      sx={{
        width: "40%",
        background: "#E6E6E6",
        padding: "0px 40px",
        borderRadius: "30px",
      }}
      direction={"row"}
      alignItems={"center"}
    >
      <SearchIcon sx={{ color: "#B7B7B7" }} />
      <Input
        disableUnderline
        fullWidth
        sx={{ background: "#E6E6E6", padding: "10px 0px" }}
        placeholder={"Search Dashboard"}
      />
    </Stack>
    <span style={{ flex: 1 }} />
    <IconButton>
      <MailOutlineIcon />
    </IconButton>
    <IconButton>
      <NotificationsNoneIcon />
    </IconButton>
    <Avatar />
  </Box>
  )
}

export default Navbar