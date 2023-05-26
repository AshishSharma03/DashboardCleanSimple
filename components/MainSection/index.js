import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import RevenueChart from "../CustomCharts/RevenueChart";
import Chart from "../CustomCharts/Chart";
import Navbar from "./itsComponent/Navbar";
import BoxTittle from "./itsComponent/BoxTittle";
import ListingOverviewBox from "./itsComponent/ListingOverviewBox";
import SaleProgressItems from "./itsComponent/SaleProgressItems";

const ListingviewData =
[
  {
    id:1001,
    name: "Active Listings",
    value :2453,
    week :765,
    color:"#DFFFFF",
    chartColor:"#46E0E0",
    data: [100, 1, 10,100, 10, 500,],

  },
  {
    id:1002,
    name: "Draft Listings",
    value :243,
    week :85,
    color:"#DFF0FF",
    chartColor:"#4194DE",
    data: [100, 10, 50,100, 10, 10,],

  },
  {
    id:1003,
    name: "Expired Listings",
    value :546,
    week :76,
    color:"#F2DFFF",
    chartColor:"#9D51D1",
    data: [0, 100, 200,300, 0, 500,],

  },
  {
    id:1004,
    name: "Inactive Listings",
    value :325,
    week :47,
    color:"#FFDFEB",
    chartColor:"#D82367",
    data: [10, 10, 50,100, 10, 50,],

  },
  {
    id:1005,
    name: "Sold out",
    value :246,
    week :25,
    color:"#FFF1DF",
    chartColor:"#DF8F27",
    data: [100, 10, 500,1000, 10, 0,],

  },
]


const SaleProgessItemsData = [
  {
    title : "Clothing & Store",
    subTitle: "Men & Women",
    value:30,
    percent:30.5,
    color:"#F2DFFF",
    backbarcolor:"#FFFCF8",
    frontbarcolor:"#9D51D1"
  },
  {
    title : "Jewelry items",
    subTitle: "Women",
    value:45,
    percent:45.5,
    color:"#DFFFFF",
    backbarcolor:"#FFFCF8",
    frontbarcolor:"#46E0E0"
  },
  {
    title : "Home & Living",
    subTitle: "Men & Women",
    value:78,
    percent:78.3,
    color:"#C3FFD9",
    backbarcolor:"#FFFCF8",
    frontbarcolor:"#46E07E"
  },
  
]


function MainSection() {

  
  return (
    <Stack sx={{ minHeight: "100vh", padding: "30px" }} gap={5}>
        <Navbar/>

      <Stack gap={3}>
        <BoxTittle titleName={'Listing Overview'} color="#FFA7BC" needMenu/>
        <Grid container spacing={"20px"}>
          {ListingviewData.map((a)=>{
            return (
              <Grid item md={2.4} sm={6} key={a.id}>
              <ListingOverviewBox name={a.name} data={a.data}  weekvalue={a.week} value={a.value} color={a.color} chartColor={a.chartColor} />
        </Grid>)
          })}
          
  
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Stack gap={2}>
            <BoxTittle titleName={"Revenue Stats"}  color={"#BFCBFF"}/>
              <Stack>
                <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
                  $2,78,864k total revenue
                </Typography>
                <Box sx={{ height: "200px", width: "100%" }}>
                  <RevenueChart  data={[50000, 70000, 50000, 60000, 58000, 60000]}/>
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={5.5}>
            <Stack gap={2}>
            <BoxTittle titleName={"Sales Progress"}  color={"#BFCBFF"} />
              {SaleProgessItemsData.map((a)=>{
                return (<SaleProgressItems title={a.title} color={a.color} subtitle={a.subTitle} value={a.value} percent={a.percent} backbarcolor={a.backbarcolor} frontbarcolor={a.frontbarcolor}/>)
              })}

            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default MainSection;
