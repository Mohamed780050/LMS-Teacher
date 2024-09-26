import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMood: false,
  bgColor: "#2E2E2E",
  reFetcher: 0,
};
export const globla = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeMood: (state) => {
      state.darkMood = !state.darkMood;
    },
    changeReFetcher: (state) => {
      state.reFetcher = state.reFetcher + 1;
    },
  },
});

export const { changeMood, changeReFetcher } = globla.actions;
export default globla.reducer;
