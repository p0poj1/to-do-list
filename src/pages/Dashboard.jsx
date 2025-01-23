import React from "react";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
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
            <Link to="/to-do-list" className={styles.btn}>
              View
            </Link>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Project 2</h3>
            <p className={styles.projectDescription}>Calculator</p>
            <Link to="/calc" className={styles.btn}>
              View
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
