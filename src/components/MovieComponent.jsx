import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { movieDetail } from '../MovieSlice'

import Movie from './Movie'
const MovieContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: "280px",
    padding: "14px",
    marginBottom: "10px",
    boxShadow: "0 3px 10px 0 #aaa",
    cursor: "pointer",

}))



const Info = styled(Box)(({ theme }) => ({

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",



}))




function MovieComponent({ movie, movies }) {
    const { title, release_date, poster_path, } = movies ? movies : {}

    const { Title, Year, Type, Poster } = movie ? movie : {}

    const movieArray = Object.values(movie || {})
    const Orignal = title
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [titl, setTitl] = useState("")




    let img_path = "https://image.tmdb.org/t/p/w500"

    const handleMovie = (titles) => {
        console.log(titles)
        setTitl(titles)


    }
    useEffect(() => {
        const fetchMovieDetail = async () => {
            if (titl !== "") {
                console.log(titl)
                await dispatch(movieDetail(titl))

                setOpen(true)
            }
        };

        fetchMovieDetail()
    }, [titl, setOpen])


    return (
        <>
            <Movie open={open} setOpen={setOpen} titles={titl} setTitl={setTitl} movieArray={movieArray} />

            <MovieContainer onClick={movieArray.length ? () => handleMovie(Title) : () => handleMovie(Orignal)}>
                <img style={{ objectFit: "cover", height: "362px", width: "250px" }} src={movieArray.length ? Poster : img_path + poster_path} alt={Title} />
                <Box component="span" sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "black",
                    margin: "15px 0",
                    whiteSpace: "nowrap",
                    overflow: 'hidden',
                    width: "100%",
                    textOverflow: "ellipsis",
                }}>
                    {movieArray.length ? Title : Orignal}

                </Box>

                <Info>
                    <Box component="span" sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "black",
                        margin: "15px 0",
                        whiteSpace: "nowrap",
                        overFlow: "hidden",
                        textTransform: "capitalize",
                        textOverflow: "ellipsis",

                    }}>
                        Year : {movieArray.length ? Year : parseFloat(release_date)}
                    </Box>
                    <Box component="span" sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "black",
                        margin: "15px 0",


                        textTransform: "capitalize",

                    }}>
                        Type :   {movieArray.length ? Type : "Movie"}

                    </Box>
                </Info>
            </MovieContainer >

        </>
    )
}

export default MovieComponent