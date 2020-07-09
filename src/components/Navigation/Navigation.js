import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.Logo}>
        <a href="/">
          Link B
          <span role="img" aria-label="image of fire">
            🔥
          </span>
          rner
        </a>
      </div>
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
