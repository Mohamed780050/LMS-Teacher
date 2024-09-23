import { configureStore } from "@reduxjs/toolkit";
import passwordLength from "./passwordLength";
import editingCourse from "./editingCourse";
import global from "./globla";
// ...

export const store = configureStore({
  reducer: {
    passwordLength: passwordLength,
    editingCourse: editingCourse,
    global: global,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
