import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  darkMood: false,
  bgColor: "#2E2E2E",
  reFetcher: 0,
  loading: false,
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { changeMood, changeReFetcher, setLoading } = globla.actions;
export default globla.reducer;
