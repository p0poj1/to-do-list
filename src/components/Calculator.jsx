import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./calc.module.css";
import CalcScreen from "./Screen";
import ButtonRow from "./ButtonRow";
import History from "./History";

export default function Calculator() {
  const [input, setInput] = useState(() => {
    return localStorage.getItem("input") || "";
  });
  const [result, setResult] = useState(() => {
    return localStorage.getItem("result") || "";
  });
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("input", input);
    localStorage.setItem("result", result);
    localStorage.setItem("history", JSON.stringify(history));
  }, [input, result, history]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const finalResult = eval(input);
        setResult(finalResult);
        setHistory((prev) => {
          const newHistory = [...prev, `${input} = ${finalResult}`];
          return newHistory.slice(-10);
        });
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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (!isNaN(key)) {
        setInput((prev) => prev + key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        setInput((prev) => prev + key);
      } else if (key === "Enter") {
        handleClick("=");
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key.toLowerCase() === "c") {
        handleClick("Clear");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  const navigation = useNavigate();
  function handleClickTodo() {
    navigation("/to-do-list");
  }

  return (
    <div className={styles.calculator}>
      <h2>My Calculator</h2>
      <CalcScreen input={input} result={result} />
      <ButtonRow handleClick={handleClick} />
      <History history={history} setHistory={setHistory} />
      <li>
        <button onClick={handleClickTodo} className={styles.btn}>
          Go to Project 1 (To Do List)
        </button>
      </li>
    </div>
  );
}
