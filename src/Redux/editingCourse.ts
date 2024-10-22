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
    catagory: "",
    AuthorId: "",
    completed: 0,
    total: 5,
    Attachments: [],
    chapters: [],
  },
};
export const editingCourse = createSlice({
  name: "editingCourse",
  initialState,
  reducers: {
    editCourse: (state, action: PayloadAction<CourseInfo>) => {
      state.Course = action.payload;
    },
    editeCatagory: (state, action: PayloadAction<string>) => {
      state.Course.catagory = action.payload;
    },
    editAttachment: (
      state,
      action: PayloadAction<
        { id: string; filename: string; data: string; completed: boolean }[]
      >
    ) => {
      state.Course.Attachments = action.payload;
    },
    addAttachment: (
      state,
      action: PayloadAction<{
        id: string;
        filename: string;
        data: string;
        completed: boolean;
      }>
    ) => {
      if (state.Course.Attachments === null) {
        state.Course.Attachments = [action.payload];
      } else {
        state.Course.Attachments = [
          ...state.Course.Attachments,
          action.payload,
        ];
      }
    },

    editChapters: (state, action: PayloadAction<string[]>) => {
      state.Course.chapters = action.payload;
    },
  },
});

export const {
  editCourse,
  editeCatagory,
  editAttachment,
  editChapters,
  addAttachment,
} = editingCourse.actions;
export default editingCourse.reducer;
