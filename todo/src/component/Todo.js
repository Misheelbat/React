import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Todo({ setList }) {
  const [term, setTerm] = useState("");
  const [url, setUrl] = useState("http://localhost:3000/todo");

  // fetch data from server using costum hook
  const { data } = useFetch(url);

  // reset input field
  const resetForm = () => {
    setTerm("");
  };

  // add term into an array of all term
  const addEvent = (todo) => {
    setList((prevTodo) => {
      return [...prevTodo, todo];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { term, id: Math.floor(Math.random() * 100) };
    addEvent(todo);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}

// todo: hook json server
// add "add" functionality to db
// filter db with query              50
