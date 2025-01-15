import { Switch, useScrollTrigger } from "@mui/material";
import "../styles/SortToggle.css";
import { useTodoContext } from "./TodoContext";
import { useState } from "react";

function SortToggle() {
  const { todoList, setTodoList } = useTodoContext();
  const [isChecked, setIsChecked] = useState(false);

  // Sort based on todo's order
  function handleSortToggling(event, checked) {
    setIsChecked(checked);

    // Note: sort() method modifies the array in place. And in React when updating state, you need to return a new object
    // so that React knows about the state update.
    if (checked) {
      setTodoList((allTodos) => {
        const todoCopy = [...allTodos];
        todoCopy.sort((curr, next) => {
          return Number(curr.done) - Number(next.done);
        });
        return todoCopy;
      });
    } else {
      setTodoList((allTodos) => {
        const todoCopy = [...allTodos];
        todoCopy.sort((curr, next) => {
          return Number(next.done) - Number(curr.done);
        });
        return todoCopy;
      });
    }
  }

  return (
    <div className="SortToggle">
      <p>Move Done Things to the End?</p>
      <Switch checked={isChecked} onChange={handleSortToggling}></Switch>
    </div>
  );
}
export default SortToggle;
