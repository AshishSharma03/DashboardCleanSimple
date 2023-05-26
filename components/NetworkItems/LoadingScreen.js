import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function LoadingScreen() {
  return (
    <Box sx={{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress
            />
    </Box>
  )
}

export default LoadingScreen