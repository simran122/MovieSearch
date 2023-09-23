import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function Error() {
  const navigate = useNavigate()
  return (

    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "4rem", padding: "1rem" }}>
      <Typography variant="h3" color="Black">We're Sorry.</Typography>
      <Typography variant="h3" color="Black" sx={{ textAlign: "center" }}>The page you're looking for doesn't exist.</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")} sx={{ marginTop: "20px" }}>Go Back</Button>

    </Box>
  )
}

export default Error
