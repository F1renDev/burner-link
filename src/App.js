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
      <Navigation />
      <MainDescription />
      <MessageBox />
      <BurnLink />
      <Footer />
    </div>
  );
};

export default App;
