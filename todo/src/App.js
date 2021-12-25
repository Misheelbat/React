import "./App.css";
import { useState } from "react";

import Todo from "./component/Todo";
import TodoList from "./component/TodoList";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo setList={setList} />
      <TodoList list={list} />
    </div>
  );
}

export default App;
