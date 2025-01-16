import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    // console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    // setTodos(newArray);
    // console.log(todo)
  }
  const completeList = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <span className={completeList} onClick={() => handleClick(item.name)}>
        <li>{item.name}</li>
      </span>
      <span>
        <button onClick={() => handleDelete(item)} className={styles.delete}>
          X
        </button>
      </span>
    </div>
  );
}
