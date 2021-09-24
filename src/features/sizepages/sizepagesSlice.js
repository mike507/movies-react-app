import { createSlice } from "@reduxjs/toolkit";
const initialState = { sizepages: 4 };

const sizepagesSlice = createSlice({
  name: "sizepages",
  initialState,
  reducers: {
    sizepagesChanged(state, action) {
      state.sizepages = action.payload.sizepages;
    },
  },
});

export const { sizepagesChanged } = sizepagesSlice.actions;
export default sizepagesSlice.reducer;
export const selectSizepages = (state) => state.sizepages.sizepages;
