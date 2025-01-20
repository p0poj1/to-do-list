import { Link } from "react-router-dom";
import styles from "./pages/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>My Apps</div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>
          Homepage
        </Link>
        <Link to="/dashboard" className={styles.navLink}>
          Dashboard
        </Link>
      </div>
    </div>
  );
}
