import { useState } from "react";
import "../styles/TodoItems.css";
import { useTodoContext } from "./TodoContext";

function TodoItems() {
  const { todoList, setTodoList } = useTodoContext();

  // 使用者勾選時，取得最新的todoList並改變todo狀態
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
  // 使用者刪除時，把該todo從todoList移除
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
