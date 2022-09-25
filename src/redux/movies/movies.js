import { createAsyncThunk } from '@reduxjs/toolkit'

// "This product uses the TMDB API but is not endorsed or certified by TMDB."

// API_KEY
// apiKey = '646ccadcf1e1a5038dd55fa6a1d01f39';

// TMBD Base api
//  baseUrl = 'https://api.themoviedb.org/3/'

// TMDB API: Popular Series List

//Actions
const FETCH_MOVIES ='entertainmentApp/movies/FETCH_MOVIES'

// Base Api For Series
const popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=646ccadcf1e1a5038dd55fa6a1d01f39&language=en-US&page=1'


// Initial State
const initialState = {
    allMoviesList: [],
}

// Get List Of Series
export const fetchAllMovies = createAsyncThunk(
    FETCH_MOVIES, async (args, { dispatch }) => {
        const response = await fetch(popularMovies)
        const data = await response.json()
        const series = Object.keys(data).map((key) => {
            const series1 = data[key];
            return {
                id: key,
                ...series1
            }
        })
        dispatch({
            type: FETCH_MOVIES,
            payload: series,
        })
        return series;
    }
)

// Reducer Function
const moviesReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_MOVIES:
            return {
               ...state,
               allMoviesList: action.payload
            }
        default:
            return state;
    }
}

export default moviesReducer;
