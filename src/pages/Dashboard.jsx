import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "../components/dashboard.module.css";

export default function Dashboard() {
//   const navigation = useNavigate();

//   function handleClick() {
//     navigation("/dashboard/calc");
//   }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          {/* <button onClick={handleClick} className={styles.btn}>
            Go to Project 2 (Calculator)
          </button> */}
        </li>
        <li>{/* <Link to="calc">Calculator</Link> */}</li>
      </ul>
      <Outlet />
    </div>
  );
}
