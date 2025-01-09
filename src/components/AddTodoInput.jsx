import "../styles/AddTodoInput.css";

function AddTodoInput({ handleAddToList }) {
  function handleInputChange(e) {}

  return (
    <div className="AddTodoInput">
      <p>Add to list</p>
      <input type="text" className="userInput" onChange={handleInputChange} />
      <button className="addToListBtn" onClick={handleAddToList}>
        +
      </button>
    </div>
  );
}

export default AddTodoInput;
