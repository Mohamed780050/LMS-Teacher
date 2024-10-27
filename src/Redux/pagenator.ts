import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  pageSize: 5,
  pageCounter: 1,
  total: 0,
};
export const pagenator = createSlice({
  name: "pagenator",
  initialState,
  reducers: {
    changePageCount: (state, action: PayloadAction<number>) => {
      state.pageCounter = action.payload;
    },
    changePageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { changePageCount, changePageSize, setTotal } = pagenator.actions;
export default pagenator.reducer;
