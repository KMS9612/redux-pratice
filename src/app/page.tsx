"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "../lib/counter/counterSlice";
import { createTodo, selectTodo } from "../lib/todos/todoSlice";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const counter = useSelector(selectCount);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button
        onClick={() => router.push("/todos")}
        className="w-[100px] h-[50px] rounded border-2"
      >
        Route To Todo
      </button>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>{counter}</div>
    </div>
  );
}
