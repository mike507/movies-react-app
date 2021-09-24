import { createSlice } from "@reduxjs/toolkit";

export const CategoryFilter = {
  All: "All",
};
const initialState = { category: CategoryFilter.All };

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryChanged(state, action) {
      console.log(state, action);
      state.category = action.payload.category;
    },
  },
});

export const { categoryChanged } = categoriesSlice.actions;
export default categoriesSlice.reducer;
export const selectCategory = (state) => state.category.category;
