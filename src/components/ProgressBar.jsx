import "../styles/ProgressBar.css";
import { useTodoContext } from "./TodoContext";

function ProgressBar() {
  const { todoList, setTodoList } = useTodoContext();
  console.log(todoList);
  const doneList = todoList.filter((todo) => todo.done);

  const percentage = (doneList.length / todoList.length) * 100;

  return (
    <div className="ProgressBar">
      <div className="text">{`${percentage}%`}</div>
      <div className="bar"></div>
    </div>
  );
}
export default ProgressBar;
