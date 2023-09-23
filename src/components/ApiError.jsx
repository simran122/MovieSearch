import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
function Error() {

  const movie = useSelector(state => state.movie)
  const { error } = movie
  return (

    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "4rem", padding: "1rem" }}>
      <Typography variant="h3" color="Black">We're Sorry.</Typography>
      <Typography variant="h3" color="Black" sx={{ textAlign: "center" }}>The page you're looking for doesn't exist.</Typography>
      <Typography variant="h3" color="Black" sx={{ textAlign: "center" }}>{error}</Typography>

    </Box>
  )
}

export default Error
