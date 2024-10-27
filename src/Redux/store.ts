import { configureStore } from "@reduxjs/toolkit";
import passwordLength from "./passwordLength";
import editingCourse from "./editingCourse";
import global from "./globla";
import Chapter from "./Chapter";
import  pagenator  from "./pagenator";
// ...

export const store = configureStore({
  reducer: {
    passwordLength: passwordLength,
    editingCourse: editingCourse,
    global: global,
    Chapter: Chapter,
    pagenator:pagenator
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
