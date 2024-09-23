import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMood: false,
  bgColor: "#2E2E2E",
};
export const globla = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeMood: (state) => {
      state.darkMood = !state.darkMood;
    },
  },
});

export const { changeMood } = globla.actions;
export default globla.reducer;
