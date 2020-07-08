import React from "react";
import styles from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import MainDescription from "./components/MainDescription/MainDescription";
import MessageBox from "./components/MessageBox/MessageBox";

const App = () => {
  return (
    <div className={styles.App}>
      <Navigation />
      <MainDescription />
      <MessageBox />
    </div>
  );
};

export default App;
