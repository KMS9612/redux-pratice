"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo, selectTodo } from "./todoSlice";

export default function TodoView() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  console.log(todos);

  const [inputTitleV, setInputTitleV] = useState("");
  const [inputV, setInputV] = useState("");

  const createTodoPayload = { title: inputTitleV, text: inputV };
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-[300px] h-[100px]">
        <input
          placeholder="Title"
          className="w-full h-[40px] border-2 rounded"
          type="text"
          onChange={(event) => setInputTitleV(event.currentTarget.value)}
        />
        <input
          placeholder="Text"
          className="w-full h-[40px] border-2 rounded"
          type="text"
          onChange={(event) => setInputV(event.currentTarget.value)}
        />
      </div>
      <button
        className="w-[300px] h-[40px] rounded border-2"
        onClick={() => dispatch(createTodo(createTodoPayload))}
      >
        CreateTodo
      </button>
      <div>
        {todos.map((todo: any, index: any) => (
          <div key={todo.title} className="flex">
            <p>Title:{todo.title}</p>
            <p>Text:{todo.text}</p>
            <button onClick={() => dispatch(deleteTodo(Number(index)))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
