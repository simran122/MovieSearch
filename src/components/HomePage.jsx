import React, { useEffect, useContext, useState } from 'react'
import { Box, styled } from '@mui/material'
import { useSelector } from 'react-redux'
import MovieComponent from './MovieComponent'
import { SearchContext } from '../App'
import NoMovie from './NoMovie';
import { useDispatch, } from 'react-redux'
import { fetchPopular } from '../MovieSlice';
import ApiError from './ApiError'
const MovieContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: "30px",
    justifyContent: "space-evenly"
}))



function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => { dispatch(fetchPopular()) }, [])
    const movie = useSelector(state => state.movie)
    const { error } = movie

    const search = useContext(SearchContext);

    const { Search } = movie.movies;

    const movieData = Object.values(Search || {})


    const { results } = movie.popular

    const [showNoMovie, setShowNoMovie] = useState(false);

    const popularData = Object.values(results || {})

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (movieData.length === 0 && search !== "") {

                setShowNoMovie(true);
            }
            else {
                setShowNoMovie(false);
            }
        }, 600);

        return () => clearTimeout(timeoutId);
    }, [movieData, search]);



    return (
        <>
            {error ? <ApiError /> :
                <>
                    {showNoMovie ? <NoMovie /> :

                        <MovieContainer>


                            {movieData.length ? (Search.map((movie) => <MovieComponent key={movie.imdbID} movie={movie} />)) : (popularData.map((movies) => <MovieComponent key={movies.id} movies={movies} />))}


                        </MovieContainer>
                    }
                </>
            }

        </>
    )
}

export default HomePage