import React from 'react'
import { Box, AppBar, Toolbar, Typography, InputBase, styled, alpha } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch,} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from '../MovieSlice';


const Searches = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '20%',
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },

    },
}));

function Navbar({ search, setSearch }) {
    const dispatch = useDispatch();




    const [timeoutId, setTimeoutId] = useState()
    const navigate = useNavigate()
    const handleChange = (e) => {
        clearTimeout(timeoutId)
        setSearch(e.target.value)

        const timeOut = setTimeout(() => dispatch(fetchMovies(e.target
            .value)), 500);
        setTimeoutId(timeOut)


     



    }

    
    const handleClick = () => {

        dispatch(fetchMovies(""
        ))
        setSearch("")

    }




    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: "#111155" }}>
                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 0.9, }} onClick={handleClick}
                    >
                        The Movie
                    </Typography>
                    <Searches>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={search}
                            onChange={handleChange}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Searches>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default Navbar
