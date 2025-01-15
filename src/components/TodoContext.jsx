import { createContext, useContext, useState } from "react";

const todoContext = createContext();

// 建立TodoList的context
export function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([
    { thing: "Learn React", done: false, order: 1 },
    { thing: "Learn Golang", done: false, order: 2 },
    { thing: "Learn Docker", done: false, order: 3 },
    { thing: "Learn something else", done: false, order: 4 },
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
