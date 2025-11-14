import { useState } from "react";

export default function Todo() {
  let [todos, setTodos] = useState(["sample task"]);
  let [newTodo, setNewTodo] = useState([""]);

  let addNewTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo([""]);
  };

  let updateNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <h1>Todo App</h1>
      <br />
      <br />
      <input type="text" value={newTodo} onChange={updateNewTodo} />
      <button
        style={{ display: "block", margin: "1rem auto 0" }}
        onClick={addNewTodo}
      >
        Add Todo
      </button>
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
