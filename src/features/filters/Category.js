import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CategoryFilter, categoryChanged } from "./categoriesSlice";
import { pageSelected } from "../pages/pageSlice";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const Category = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const categories = useSelector((state) => [
    CategoryFilter.All,
    ...new Set(movies.map((elem) => elem.category)),
  ]);
  const category = useSelector((state) => state.category.category);
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-category" label="Category">
          Category
        </InputLabel>
        <Select
          labelId="select-category-label"
          id="select-category"
          value={category}
          onChange={(event) => {
            dispatch(categoryChanged({ category: event.target.value }));
            dispatch(pageSelected({ page: 1 }));
          }}
          label="Category"
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
