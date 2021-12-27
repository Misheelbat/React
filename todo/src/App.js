import "./App.css";

import Todo from "./component/Todo";
import TodoList from "./component/TodoList";
import TestSelector from "./component/TestSelector";
import { useTest } from './hooks/useTestContext'

function App() {
  const { mode } = useTest();
  return (
    <div className="App">
      <h1 className={`back ${mode}`}>Todo App</h1>
      <TestSelector />
      <Todo />
      <TodoList />
    </div>
  );
}

export default App;
