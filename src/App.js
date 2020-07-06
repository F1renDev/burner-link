import React from "react";
import styles from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  return (
    <div className={styles.App}>
      <Navigation />
    </div>
  );
};

export default App;
