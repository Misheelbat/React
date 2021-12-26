import { useState, useEffect } from "react";
import { proFire } from "../firebase/config";

export default function Todo({ setList }) {
  const [term, setTerm] = useState("");

  // reset input field
  const resetForm = () => {
    setTerm("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = { term };
    try {
      await proFire.collection("todo").add(todo);
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Todo:</span>
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
