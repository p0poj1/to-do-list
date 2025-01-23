import styles from "./buttonrow.module.css"
export default function ButtonRow({ handleClick }) {
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", "+", "=", "Clear"],
  ];
  return (
    <div className={styles.buttonRow}>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
