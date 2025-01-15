import { useState } from "react";
import "../styles/AddTodoInput.css";
import { useTodoContext } from "./TodoContext";
import plus_svg from "../assets/plus.svg";
function AddTodoInput() {
  const { todoList, setTodoList } = useTodoContext();

  const [userInput, setUserInput] = useState("");

  function handleInputChange(e) {
    setUserInput(() => e.target.value);
  }

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
