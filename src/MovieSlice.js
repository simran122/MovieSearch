
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    popular: [],
    movies: [],
    movieDetail: [],
    error: "",

};

export const API_KEY = 'a5bf4860';
export const API = "87c67283f886ddb387f9d81cd29e2d98";

export const fetchPopular = createAsyncThunk(     //createAsyncThunk is a function that accepts a string action type and a function that returns a promise
    "movie/fetchPopular",
    async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API}`);
        return response.data;

    }
);

export const fetchMovies = createAsyncThunk(
    "movie/fetchMovies",
    async (search) => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
        return response.data;

    }
);

export const movieDetail = createAsyncThunk(
    "movie/MovieDetail",
    async (title) => {
        const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
        return response.data;

    }
);

const movieSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.loading = false;
            state.popular = action.payload;
            state.error = "";
        })
        builder.addCase(fetchPopular.rejected, (state, action) => {
            state.loading = false;
            state.popular = [];
            state.error = action.error.message;
        })
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {

            state.loading = false;
            state.movies = action.payload;
            state.error = "";

        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = [];
            state.error = action.error.message;


        })
        builder.addCase(movieDetail.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(movieDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.movieDetail = action.payload;
            state.error = "";


        })
        builder.addCase(movieDetail.rejected, (state, action) => {
            state.loading = false;
            state.movieDetail = [];
            state.error = action.error.message;

        })
    }

});
export default movieSlice.reducer;

