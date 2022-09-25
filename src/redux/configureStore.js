import { configureStore } from "@reduxjs/toolkit";
import  seriesReducer  from "./series/series";
import moviesReducer from "./movies/movies";


const store = configureStore({ 
    reducer: { 
        allSeries :  seriesReducer,
        allMovies :  moviesReducer
    }
})

export default store;
