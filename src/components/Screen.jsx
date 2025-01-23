import styles from "./screen.module.css"
export default function CalcScreen({ input, result }) {
  return (
    <div className={styles.screen}>
      <input type="text" readOnly value={input} placeholder="0" />
      <input type="text" readOnly value={result} placeholder="Result" />
    </div>
  );
}
