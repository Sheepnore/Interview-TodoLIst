import { useState } from "react";
import "../styles/TodoItems.css";

function TodoItems() {
  const todoList = [
    "Learn React",
    "Learn Golang",
    "Learn Docker",
    "Learn something else",
  ];

  return (
    <div className="TodoItems">
      {todoList.map((item) => (
        <div className="item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
