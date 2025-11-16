import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState([""]);

  let addNewTodo = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo([""]);
  };

  let updateNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
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
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                upperCaseOne(todo.id);
              }}
            >
              UpparCaseIt
            </button>
          </li>
        ))}
      </ul>

      <button onClick={upperCaseAll}>UPPER CASE ALL</button>
    </>
  );
}
