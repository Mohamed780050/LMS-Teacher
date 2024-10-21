import { CourseChapters } from "@/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { chapter: CourseChapters } = {
  chapter: {
    _id: "",
    CourseId: "",
    AuthorId: "",
    isFree: false,
    isPublished: false,
    videoURL: "",
    chapterName: "",
    description: "",
    position: 0,
    total: 3,
    complete: 1,
    Date: {
      normal: "",
      full: "",
    },
  },
};
export const Chapter = createSlice({
  name: "chapter",
  initialState,
  reducers: {
    setChapter: (state, action: PayloadAction<CourseChapters>) => {
      state.chapter = action.payload;
    },
  },
});

export const { setChapter } = Chapter.actions;
export default Chapter.reducer;
