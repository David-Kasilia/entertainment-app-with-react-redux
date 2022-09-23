import { configureStore, combineReducers } from "@reduxjs/toolkit";
import seriesReducer from "./series/series";


const allReducers  = combineReducers({
    series: seriesReducer,
})
const store = configureStore({ reducer: allReducers })

export default store;
