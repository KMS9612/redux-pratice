import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "asd",
    text: "asd",
  },
];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      console.log(action);
      const obj = {
        title: action.payload.title,
        text: action.payload.text,
      };
      state.push(obj);
    },

    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
      console.log(state);
    },
  },
});

export const selectTodo = (state: any) => state.todos;

export const { createTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
