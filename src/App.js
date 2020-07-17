import React from "react";
import styles from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import MainDescription from "./components/MainDescription/MainDescription";
import MessageBox from "./components/MessageBox/MessageBox";
import BurnLink from "./components/BurnLink/BurnLink";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.Content}>
        <Navigation />
        <MainDescription />
        <MessageBox />
        <BurnLink />
      </div>
      <Footer />
    </div>
  );
};

export default App;
