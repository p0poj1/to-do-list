import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    // To prevent empty todos
    if (!todo.name.trim()) return;
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);

    // Save updated todos to local storage
    localStorage.setItem("list", JSON.stringify(updatedTodos));
    // console.log(todo);

    setTodo({ name: "", done: false }); // Clear the input field
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter here"
        />
        <button className="btn btn-circle btn-outline">Add</button>
      </form>
    </div>
  );
}
