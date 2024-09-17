import { CourseInfo } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

const initialState: { Course: CourseInfo } = {
  Course: {
    _id: "",
    courseName: "",
    Description: "",
    ImageURL: "",
    price: 0,
    IsPublished: false,
    Date: {
      normal: "",
      full: "",
    },
    catagory: [{ Icon: "", Name: "" }],
    AuthorId: "",
    completed: 0,
    total: 5,
  },
};
export const editingCourse = createSlice({
  name: "editingCourse",
  initialState,
  reducers: {
    editCourse: (state, action: PayloadAction<CourseInfo>) => {
      state.Course = action.payload;
    },
    editeCatagory: (
      state,
      action: PayloadAction<{ Icon: ReactNode; Name: string }[]>
    ) => {
      state.Course.catagory = action.payload;
    },
  },
});

export const { editCourse, editeCatagory } = editingCourse.actions;
export default editingCourse.reducer;
