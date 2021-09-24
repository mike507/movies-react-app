import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: 1 };
const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    pageNext(state, action) {
      //console.log("state = ", state);
      //const nbPages = calcNbPages(state.movies.movies.length, state.sizepages.sizepages);
      //state.page.page = Math.min(nbPages, state.page.page+1);
      state.page = state.page + 1;
    },
    pagePrevious(state, action) {
      state.page = state.page - 1;
      //state.page.page = Math.max(1, state.page.page-1);
    },
    pageSelected(state, action) {
      const { page } = action.payload;
      state.page = page;
    },
  },
});

export const { pageNext, pagePrevious, pageSelected } = pageSlice.actions;
export default pageSlice.reducer;

export const selectPage = (state) => state.page.page;
