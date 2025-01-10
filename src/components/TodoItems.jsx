import { useState } from "react";
import "../styles/TodoItems.css";
import { useTodoContext } from "./TodoContext";

function TodoItems() {
  const { todoList, setTodoList } = useTodoContext();

  function handleCheckboxClick(index) {
    setTodoList((prevList) => {
      return prevList.map((item, i) => {
        if (i === index) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    });
  }

  function handleDeleteBtnClick(index) {
    setTodoList((prevList) => {
      return prevList.filter((item, i) => i !== index);
    });
  }

  return (
    <div className="TodoItems">
      {todoList.map((item, index) => (
        <div className="item" key={item.thing}>
          <input
            type="checkbox"
            className="checkbox"
            checked={item.done}
            onChange={() => handleCheckboxClick(index)}
          />
          <p className={item.done ? "done" : "notDone"}>{item.thing}</p>
          <button
            onClick={() => {
              handleDeleteBtnClick(index);
            }}
            className="deleteBtn"
          ></button>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
