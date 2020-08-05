import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = () => {
  const clickHandler = () => {
    console.log(123);
  };
  return <div className={styles.Backdrop} onClick={clickHandler}></div>;
};

export default Backdrop;
