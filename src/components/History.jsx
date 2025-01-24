import { React } from "react";
import styles from "./history.module.css";

export default function History({ history, setHistory }) {
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("history");
  };

  return (
    <div className={styles.history}>
      <h3>Calculation History</h3>

      <button className="btn btn-ghost btn-sm" onClick={clearHistory}>
        Clear history
      </button>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
