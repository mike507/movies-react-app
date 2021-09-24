import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/movies/moviesSlice'
import categoriesReducer from "../features/filters/categoriesSlice";
import sizepagesReducer from "../features/sizepages/sizepagesSlice";
import pageReducer from "../features/pages/pageSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        category: categoriesReducer,
        sizepages: sizepagesReducer,
        page: pageReducer
    }
})