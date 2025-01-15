import { createContext, useContext, useState } from "react";

const todoContext = createContext();

// 建立TodoList的context
export function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([
    { thing: "Learn React", done: false },
    { thing: "Learn Golang", done: false },
    { thing: "Learn Docker", done: false },
    { thing: "Learn something else", done: false },
  ]);

  return (
    <todoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </todoContext.Provider>
  );
}

// 建立 TodoList custom hook
export function useTodoContext() {
  return useContext(todoContext);
}
