import "./App.css";
import { useState } from "react";

import Todo from "./component/Todo";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
