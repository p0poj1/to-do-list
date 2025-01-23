import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./calc.module.css";
import CalcScreen from "./Screen";
import ButtonRow from "./ButtonRow";

export default function Calculator() {
  const [input, setInput] = useState(() => {
    return localStorage.getItem("input") || "";
  });
  const [result, setResult] = useState(() => {
    return localStorage.getItem("result") || "";
  });

  useEffect(() => {
    localStorage.setItem("input", input);
    localStorage.setItem("result", result);
  }, [input, result]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const finalResult = eval(input);
        setResult(finalResult);
        setInput("");
      } catch (error) {
        setResult("Math Error");
        setInput("");
      }
    } else if (value === "Clear") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const navigation = useNavigate();
  function handleClickTodo() {
    navigation("/to-do-list");
  }

  return (
    <div className={styles.calculator}>
      <h2>My Calculator</h2>
      <CalcScreen input={input} result={result} />
      <ButtonRow handleClick={handleClick} />
      <li>
        <button onClick={handleClickTodo} className={styles.btn}>
          Go to Project 1 (To Do List)
        </button>
      </li>
    </div>
  );
}
