import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
import styles from "./todo.module.css";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do-List</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
