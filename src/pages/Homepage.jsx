import React from "react";
import { Link } from "react-router-dom";
import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My CodeX</h1>
        <p className={styles.subtitle}>
          Your hub for all projects and progress.
        </p>
      </header>

      {/* Dashboard Section */}
      <section className={styles.section}>
        <h2>Menu</h2>
        <div className={styles.projectList}>
          {/* View dashboard contents */}
          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>Dashboard</h3>
            <p className={styles.projectDescription}>List of Projects</p>
            <Link to="/dashboard" className={styles.button}>
              View
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
