import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../lib/counter/counterSlice";
import todoSlice from "./todos/todoSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, todos: todoSlice },
});
