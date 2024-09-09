import { CourseInfo } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    catagory: [],
    AuthorId: "",
  },
};
export const editingCourse = createSlice({
  name: "editingCourse",
  initialState,
  reducers: {
    editCourse: (state, action: PayloadAction<CourseInfo>) => {
      state.Course = action.payload;
    },
  },
});

export const { editCourse } = editingCourse.actions;
export default editingCourse.reducer;
