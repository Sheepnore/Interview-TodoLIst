import { useState } from "react";
import "../styles/AddTodoInput.css";
import { useTodoContext } from "./TodoContext";
import plus_svg from "../assets/plus.svg";
function AddTodoInput() {
  // 取Context 的值
  const { todoList, setTodoList } = useTodoContext();

  const [userInput, setUserInput] = useState("");

  // 使用者輸入
  function handleInputChange(e) {
    setUserInput(() => e.target.value);
  }
  // 使用者按下新增按鈕，把它加入到Todo List 裏面
  function handleAddBtnClick() {
    setTodoList([...todoList, { thing: userInput, done: false }]);
    setUserInput("");
  }

  return (
    <div className="AddTodoInput">
      <div className="input-text">Add to list</div>
      <div className="input-container">
        <input
          type="text"
          className="userInput"
          onChange={handleInputChange}
          value={userInput}
        />
        <button className="addToListBtn" onClick={handleAddBtnClick}>
          <img src={plus_svg} alt="plus_svg" />
        </button>
      </div>
    </div>
  );
}

export default AddTodoInput;
