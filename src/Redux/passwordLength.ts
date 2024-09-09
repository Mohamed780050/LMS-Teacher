import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { value: string } = {
  value: "",
};
export const passwordLength = createSlice({
  name: "passwordLength",
  initialState,
  reducers: {
    setPasswordLength: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPasswordLength } = passwordLength.actions;
export default passwordLength.reducer;
