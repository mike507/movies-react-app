import React from 'react'
import { MoviesList } from './features/movies/MoviesList'
import {Category} from "./features/filters/Category";
import {SizePages} from "./features/sizepages/SizePages";
import {MoviesAppBar} from "./features/app/MoviesAppBar";
import {MoviesAppHeader} from "./features/app/Header";
import {Grid} from "@mui/material";
import {MoviesAppFooter} from "./features/app/Footer";

function App() {
    return (
        <>
            <MoviesAppBar />
            <MoviesAppHeader />
            <Grid container>
                <Category />
                <SizePages />
            </Grid>
            <MoviesList />
            <MoviesAppFooter />
        </>
    )
}

export default App
