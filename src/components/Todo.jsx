import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
import styles from "./todo.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const navigation = useNavigate();
  function handleClickCal() {
    navigation("/calc");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do-List</h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
      <ul className={styles.list}>
        <li>
          <button onClick={handleClickCal} className={styles.btn}>
            Go to Project 2 (Calculator)
          </button>
        </li>
      </ul>
    </div>
  );
}
