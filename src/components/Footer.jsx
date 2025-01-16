import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.item}>
      <span>Completed Todos:{completedTodos}</span>
      <span>Total Todos:{totalTodos}</span>
    </div>
  );
}
