import { configureStore } from "@reduxjs/toolkit";
import  seriesReducer  from "./series/series";


const store = configureStore({ 
    reducer: { 
        allSeries :  seriesReducer
    }
})

export default store;
