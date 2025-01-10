import "../styles/ProgressBar.css";
import { useTodoContext } from "./TodoContext";

function ProgressBar() {
  const { todoList, setTodoList } = useTodoContext();

  // 找出todo中已完成的
  const doneList = todoList.filter((todo) => todo.done);
  // todo中已完成/總數的趴數
  const percentage =
    todoList.length > 0 ? (doneList.length / todoList.length) * 100 : 0;

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
