import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function NoMovie() {

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "2rem", padding: "1rem" }}>
            <Typography variant="h3" color="Black">We're Sorry.</Typography>
            <Typography variant="h3" color="Black" sx={{ textAlign: "center" }}>The Movie you're looking for doesn't exist.</Typography>
            <Typography variant="h3" color="Black" sx={{ textAlign: "center" }}>Check the spelling of Movie</Typography>


        </Box>
    )
}

export default NoMovie