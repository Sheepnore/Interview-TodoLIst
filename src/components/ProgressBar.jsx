import "../styles/ProgressBar.css";
import { useTodoContext } from "./TodoContext";

function ProgressBar() {
  const { todoList, setTodoList } = useTodoContext();
  console.log(todoList);
  const doneList = todoList.filter((todo) => todo.done);

  const percentage = (doneList.length / todoList.length) * 100;

  return (
    <div className="ProgressBar">
      <label className="text" htmlFor="todoProgress">{`${percentage}%`}</label>
      <progress
        className="bar"
        id="todoProgress"
        max="100"
        value={percentage}
      ></progress>
    </div>
  );
}
export default ProgressBar;
