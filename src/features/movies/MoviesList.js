import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SingleMovieCard } from "./SingleMovieCard";
import {
  fetchMovies,
  selectMoviesError,
  selectMoviesStatus,
  selectMoviesByCategory,
} from "./moviesSlice";
import { selectCategory } from "../filters/categoriesSlice";
import { Spinner } from "../../components/Spinner";
import { usePaginate } from "../../helpers/usePaginate";
import { Grid } from "@mui/material";
import { FormPages } from "../pages/FormPages";

const MovieExcerpt = ({ movie }) => {
  return <SingleMovieCard key={movie.id} movie={movie} />;
};

export const MoviesList = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => selectMoviesError(state));
  const moviesStatus = useSelector((state) => selectMoviesStatus(state));
  const category = useSelector((state) => selectCategory(state));
  const filteredMovies = useSelector((state) =>
    selectMoviesByCategory(state, category)
  );

  useEffect(() => {
    if (moviesStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [moviesStatus, dispatch]);

  const { firstElementIndex, lastElementIndex, numberPages } =
    usePaginate(filteredMovies);
  const visibleMovies = filteredMovies.slice(
    firstElementIndex,
    lastElementIndex
  );

  let content;
  if (moviesStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (moviesStatus === "succeeded") {
    content = (
      <Grid container spacing={4}>
        {visibleMovies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <MovieExcerpt key={movie.id} movie={movie} />
          </Grid>
        ))}
      </Grid>
    );
  } else if (moviesStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <>
      {content}
      <FormPages
        firstElementIndex={firstElementIndex}
        lastElementIndex={lastElementIndex}
        numberElements={filteredMovies.length}
        numberPages={numberPages}
      />
    </>
  );
};
