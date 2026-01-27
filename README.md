This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice.js';

export const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
});

import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      }
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux/todoSlice.js";

const Page = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Card */}
        <div className="relative rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-white/40 p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                My Todos
              </h1>
              <p className="text-sm text-gray-500">
                {todos.length === 0
                  ? "Add your first task to get started."
                  : `${todos.length} total • ${completedCount} completed`}
              </p>
            </div>
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-blue-500 shadow-md grid place-items-center text-white">
              {/* check icon */}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-1 group">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="What needs to be done?"
                  className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 pr-12 text-sm outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
                <button
                  onClick={handleAddTodo}
                  aria-label="Add todo"
                  className="absolute right-1.5 top-1.5 h-9 px-3 rounded-xl bg-indigo-600 text-white text-sm font-medium shadow hover:bg-indigo-700 active:scale-95 transition"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* List */}
          <ul className="space-y-3">
            {todos.length === 0 ? (
              <li className="rounded-2xl border border-dashed border-gray-300 bg-white/60 p-6 text-center text-gray-500 text-sm">
                Nothing here yet. Type above and press <b>Enter</b> or click{" "}
                <b>Add</b>.
              </li>
            ) : (
              todos.map((todo) => (
                <li
                  key={todo.id}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm hover:shadow-md transition"
                >
                  <button
                    onClick={() => handleToggleTodo(todo.id)}
                    className={`flex items-center gap-3 flex-1 text-left`}
                  >
                    <span
                      className={`grid place-items-center h-6 w-6 rounded-lg border transition ${
                        todo.completed
                          ? "bg-green-500 border-green-500 text-white"
                          : "bg-white border-gray-300 text-transparent"
                      }`}
                      aria-hidden
                    >
                      {/* check icon */}
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span
                      className={`text-sm md:text-base transition ${
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </button>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    title="Delete"
                    className="opacity-70 hover:opacity-100 text-red-600 hover:text-red-700 rounded-xl p-2 transition"
                  >
                    {/* trash icon */}
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M3 6h18M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              ))
            )}
          </ul>

          {/* Footer mini actions */}
          {todos.length > 0 && (
            <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
              <span>
                Tip: Click the checkbox to complete. Click the bin to delete.
              </span>
              <span className="rounded-lg bg-white/70 border border-gray-200 px-2 py-1">
                Beautiful • Minimal • Fast
              </span>
            </div>
          )}

          {/* Glow decor */}
          <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[32px] bg-gradient-to-r from-indigo-300/30 via-blue-300/20 to-cyan-300/30 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
