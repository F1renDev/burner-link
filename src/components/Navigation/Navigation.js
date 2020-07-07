import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <a href="/">Logo</a>
      <div className={styles.NavigationItems}>
        <div className={styles.NavigationItem}>
          <h2>SHARE</h2>
        </div>
        <div className={styles.NavigationItem}>
          <h2>ABOUT</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
