import { useState } from "react";
import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);

  // Toggle "done" status of the item
  function handleToggle(name) {
    const updatedTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("list", JSON.stringify(updatedTodos)); // Sync with local storage
  }
  function handleClickDel(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);

    setTodos(updatedTodos);
    localStorage.setItem("list", JSON.stringify(updatedTodos)); // Sync with local storage
  }

  function handleSave() {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, name: editedName } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("list", JSON.stringify(updatedTodos)); // Sync with local storage
    setIsEditing(false);
  }

  const completeList = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      {isEditing ? (
        // If editing, show input field
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className={`${styles["edit-input"]}`}
        />
      ) : (
        // Otherwise, show the task name
        <span className={completeList} onClick={() => handleToggle(item.name)}>
          <li>{item.name}</li>
        </span>
      )}
      <span>
        {isEditing ? (
          // Save button if in edit mode
          <button onClick={handleSave} className={styles.save}>
            Save
          </button>
        ) : (
          // Edit button if not in edit mode
          <button onClick={() => setIsEditing(true)} className={styles.edit}>
            Edit
          </button>
        )}
        <button onClick={() => handleClickDel(index)} className={styles.delete}>
          X
        </button>
      </span>
    </div>
  );
}
