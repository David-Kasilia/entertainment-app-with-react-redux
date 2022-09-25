import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// "This product uses the TMDB API but is not endorsed or certified by TMDB."

// API_KEY
// apiKey = '646ccadcf1e1a5038dd55fa6a1d01f39';

// TMBD Base api
//  baseUrl = 'https://api.themoviedb.org/3/'

// TMDB API: Popular Series List

// const popularSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=646ccadcf1e1a5038dd55fa6a1d01f39&language=en-US&page=1'

// export const fetchAllSeries = createAsyncThunk(
//     'allSeries/fetchAllSeries',
//     async () => {
//         const response = await fetch(popularSeries)
//         const seriesResponse = await response.json()
//         return seriesResponse
//     }
// )

// export const allSeriesSlice = createSlice({
//     name: 'allSeries',
//     initialState: {
//         allSeriesList: [],
//         isLoading: false,
//     },
//     extraReducers: {
//         [fetchAllSeries.pending]: (state) => {
//             state.isLoading = true;
//         },

//         [fetchAllSeries.fulfilled]: (state, action) => {
//             state.allSeriesList = action.payload
//             state.isLoading = false
//         },

//         [fetchAllSeries.rejected]: (state) => {
//             state.isLoading = false
//         }
//     }
// })

// export default allSeriesSlice.reducer;


//Actions
const FETCH_SERIES ='entertainmentApp/movies/FETCH_SERIES'

// Base Api For Series
const popularSeries = 'https://api.themoviedb.org/3/tv/popular?api_key=646ccadcf1e1a5038dd55fa6a1d01f39&language=en-US&page=1'


// Initial State
const initialState = {
    allSeriesList: [],
}

// Get List Of Series
export const fetchAllSeries = createAsyncThunk(
    FETCH_SERIES, async (args, { dispatch }) => {
        const response = await fetch(popularSeries)
        const data = await response.json()
        const series = Object.keys(data).map((key) => {
            const series1 = data[key];
            return {
                id: key,
                ...series1
            }
        })
        dispatch({
            type: FETCH_SERIES,
            payload: series,
        })
        return series;
    }
)

// Reducer Function
const seriesReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_SERIES:
            return {
               ...state,
               allSeriesList: action.payload
            }
        default:
            return state;
    }
}

export default seriesReducer;
