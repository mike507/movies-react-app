import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { movies$ } from "../../api/movies";
const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", () => {
  return movies$;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { movieId, reaction } = action.payload;
      const existingMovie = state.movies.find((movie) => movie.id === movieId);
      if (existingMovie) {
        //existingMovie.reactions[reaction]++
        existingMovie[reaction]++;
      }
    },
    movieDeleted(state, action) {
      const { movieId } = action.payload;
      //state.filter((movie) => movie.id !== action.payload)
      const movieIndex = state.movies.findIndex(
        (movie) => movie.id === movieId
      );
      console.log("movieIndex = ", movieIndex);
      if (movieIndex >= 0) {
        //existingMovie.reactions[reaction]++
        state.movies.splice(movieIndex, 1);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched movies to the array
        state.movies = state.movies.concat(action.payload);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { reactionAdded, movieDeleted } = moviesSlice.actions;
export default moviesSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;
export const selectMoviesStatus = (state) => state.movies.status;
export const selectMoviesError = (state) => state.movies.error;

export const selectMoviesByCategory = (state, category) =>
  category === "All"
    ? state.movies.movies
    : state.movies.movies.filter((movie) => movie.category === category);
