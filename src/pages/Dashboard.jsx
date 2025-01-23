import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const navigation = useNavigate();

  function handleClickCal() {
    navigation("/dashboard/calc");
  }

  function handleClickTodo() {
    navigation("/dashboard/to-do-list");
  }

  return (
    <div className={styles.container}>
      {/* Original Dashboard Content */}
      <ul className={styles.list}>
      <li>
          <button onClick={handleClickTodo} className={styles.btn}>
            Go to Project 1 (To Do List)
          </button>
        </li>
        <li>
          <button onClick={handleClickCal} className={styles.btn}>
            Go to Project 2 (Calculator)
          </button>
        </li>
      </ul>
      {/* Integrated Content */}
      {/* Hero Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>My Dashboard</h1>
        <p className={styles.subtitle}>
          Your hub for all projects and progress.
        </p>
      </header>

      {/* Projects Section */}
      <section className={styles.section}>
        <h2>Projects:</h2>
        <div className={styles.projectList}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Project 1</h3>
            <p className={styles.projectDescription}>To-Do-List</p>
            <Link to="/dashboard/to-do-list" className={styles.btn}>
              View
            </Link>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Project 2</h3>
            <p className={styles.projectDescription}>Calculator</p>
            <Link to="/dashboard/calc" className={styles.btn}>
              View
            </Link>
          </div>
        </div>
      </section>

      {/* Nested Routes */}
      <Outlet />
    </div>
  );
}
