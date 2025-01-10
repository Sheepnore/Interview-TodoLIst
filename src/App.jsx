import "./App.css";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TodoItems from "./components/TodoItems";
import SortToggle from "./components/SortToggle";
import AddTodoInput from "./components/AddTodoInput";
import { TodoContextProvider } from "./components/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header></Header>
        <ProgressBar></ProgressBar>
        <TodoItems></TodoItems>
        <SortToggle></SortToggle>
        <AddTodoInput></AddTodoInput>
      </TodoContextProvider>
    </div>
  );
}

export default App;
