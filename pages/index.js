import { Box,Grid, Typography,Stack, IconButton, Menu, MenuList, MenuItem, Icon, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MainSection from '../components/MainSection';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/NetworkItems/LoadingScreen';
const menuitemData = [
  {
    id : 0,
    name : 'Home',
    icon : <HomeOutlinedIcon/>
  },
  {
    id : 2,
    name : 'Listings',
    icon : <DiamondOutlinedIcon/>
  },
  {
    id : 3,
    name : 'Order & Delivery',
    icon : <AssignmentOutlinedIcon/>
  },
  {
    id : 4,
    name : 'Stats',
    icon : <EqualizerIcon/>
  },
  {
    id : 5,
    name : 'Finances',
    icon : <AccountBalanceOutlinedIcon/>
  },
  {
    id : 6,
    name : 'Marketing',
    icon : <VolumeUpOutlinedIcon/>
  },
  {
    id : 7,
    name : 'Integrations',
    icon : <GridViewOutlinedIcon/>
  },
  {
    id : 8,
    name : 'Reports',
    icon : <PieChartRoundedIcon/>
  },
  {
    id : 9,
    name : 'settings',
    icon : <SettingsRoundedIcon/>
  },
]

const insightData = [
  {
    id :10,
    name : "Inbox",
    icon : <MailOutlinedIcon/>
  },
  {
    id :11,
    name : "Notification",
    icon : <NotificationsNoneOutlinedIcon/>
  }
]

const MenuBoxItems = ({id,name,icon,active,onClick,noName}) => {

  if(noName){
    return(
      <MenuItem onClick={onClick} sx={{margin:active === id?"15px 0px":"0px",display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",padding:"15px 0px",borderRadius:"0px",background:active === id?"#2C56FF":"none",color:active === id?"#fff":"#7C7C7C",}}>
    {icon}
    </MenuItem>
    )
  }
  return (
    <MenuItem onClick={onClick} sx={{margin:active === id?"15px 0px":"0px",color:active === id?"#fff":"#7C7C7C",display:'flex',alignItems:"center",gap:1,flexDirection:"row",padding:active===id ?"15px 19px":"15px 5px",borderRadius:"10px",background:active === id?"#2C56FF":"none",color:active === id?"#fff":"#7C7C7C",boxShadow:active === id?"0px 0px 50px 1px rgba(44, 86, 255,0.7 )":"none"}}>
      {icon}
      {name}
    </MenuItem>
    )
}


function Index() {
  const [Open , setOpen] = useState(true)
  const [menuId , setMenuId]= useState(0)
  const [loading, setLoading] = useState(true);



  useEffect(() => {
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  
  if (loading) {
    return <LoadingScreen />;
  }
    

  return (
    <Box sx={{minHeight:"100vh"}}>
        <Grid container>
            <Grid item xs={Open?2:0.5} sx={{borderRight:"1px solid #D8D8D8",minHeight:"100vh"}}>
                <Stack sx={{padding:Open?"30px 20px 20px 20px":"30px 0px 0px 0px"}} direction={Open?"row":"column"} alignItems={"center"}>
                  {
                    Open?
                    <Typography sx={{fontWeight:"800",fontSize:"20px"}}>Ceansimple</Typography>
                    :
                    <Typography sx={{fontWeight:"800",fontSize:"20px"}}>CS</Typography>
                  }
                  <span style={{flex:1}}/>
                  <IconButton  onClick={()=>{setOpen(!Open)}}>
                    <DoubleArrowIcon sx={{transform:Open?"rotate(180deg)":"rotate(0deg)"}}/>
                  </IconButton>
                
                </Stack>
                 <Stack sx={{padding:Open?"0px 20px":"0px"}}>
                      <MenuList sx={{display:Open?"block":"none",'& li:hover': {color: '#000',},}}>
                         {menuitemData.map((a)=>{
                          return <MenuBoxItems name={a.name} key={a.id} icon={a.icon} id={a.id} active={menuId} onClick={()=>{setMenuId(a.id)}}  />
                         })}
                      </MenuList>
                      <MenuList sx={{display:Open?"none":"block",'& li:hover': {color: '#000'},}}>
                         {menuitemData.map((a)=>{
                          return <MenuBoxItems noName name={a.name} key={a.id} icon={a.icon} id={a.id} active={menuId} onClick={()=>{setMenuId(a.id)}}  />
                         })}
                      </MenuList>
                 </Stack> 
                 <Stack sx={{padding:"20px 20px"}}> 
                  <Divider/>
                 </Stack>
                 <Stack  sx={{padding:Open?"0px 20px":"0px"}}> 
                    <MenuList  sx={{display:Open?"block":"none",'& li:hover': {color: '#000',},}}>
                      {insightData.map((a)=>{
                        return <MenuBoxItems name={a.name} key={a.id} icon={a.icon} id={a.id} active={menuId} onClick={()=>{setMenuId(a.id)}} />
                      })}
                    </MenuList>
                    <MenuList  sx={{display:Open?"none":"block",'& li:hover': {color: '#000',},}}>
                      {insightData.map((a)=>{
                        return <MenuBoxItems noName  key={a.id} icon={a.icon} id={a.id} active={menuId} onClick={()=>{setMenuId(a.id)}} />
                      })}
                    </MenuList>
                 </Stack> 
            </Grid>
            <Grid item xs={Open?10:11.5} sx={{minHeight:"100vh"}}>
          
                   <MainSection/>
              
            </Grid>
        </Grid>
    </Box>
  )
}

export default Index