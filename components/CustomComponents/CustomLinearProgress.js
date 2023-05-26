import {LinearProgress,styled} from '@mui/material'

const CustomLinearProgress = styled(LinearProgress)(({ theme ,backbarcolor,frontbarcolor}) => ({
    height: 5,
    borderRadius: 5,
    '& .MuiLinearProgress-bar': {
      backgroundColor: frontbarcolor,
    },
    '&.MuiLinearProgress-colorPrimary': {
      backgroundColor: backbarcolor,
     
    },
  }));

  export default CustomLinearProgress