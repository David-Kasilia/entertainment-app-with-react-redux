import { createAsyncThunk } from '@reduxjs/toolkit'

//Actions
const FETCH_SERIES ='entertainmentApp/movies/FETCH_SERIES'

// Base Api For Series
const seriesApi = 'https://api.tvmaze.com/shows'

// Initial State
const initialState = {
    seriesList: [],
}

// Get List Of Series
export const fetchSeries = createAsyncThunk(
    FETCH_SERIES, async (args, { dispatch }) => {
        const response = await fetch(seriesApi)
        const data = await response.json()
        const series = Object.keys(data).map((key) => {
            const series1 = data[key][0];
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
               seriesList: action.payload
            }
        default:
            return state;
    }
}

export default seriesReducer;
