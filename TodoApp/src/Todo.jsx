import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState([""]);

  let addNewTodo = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
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
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}
