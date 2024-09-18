import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};
export const darkmood = createSlice({
  name: "mood",
  initialState,
  reducers: {
    changeMood: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const { changeMood } = darkmood.actions;
export default darkmood.reducer;
