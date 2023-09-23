import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Footer() {
    const movie = useSelector(state => state.movie)
    const { Search } = movie.movies;

    const { results } = movie.popular


    const movieData = Object.values(Search || {})
    const popularData = Object.values(results || {})
    return (
        <>
            {movieData.length || popularData.length ? <Box sx={{ justifyContent: "center", mt: "1rem", height: "3rem", bgcolor: "#111155", display: "flex", alignItems: "center", p: "30px", textAlign: "center" }}>
                <Typography variant='h5' sx={{ fontFamily: "Jost", color: "white", }}>Copyright © The Movie Powered by- Simran </Typography>
            </Box> : null}
        </>

    )
}

export default Footer