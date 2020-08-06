import React from "react";
import styles from "./Navigation.module.css";
import * as actionTypes from "../../store/actions";

import { useDispatch } from "react-redux";
import img3 from "../../assets/3.svg";

const Navigation = () => {
  const dispatch = useDispatch();
  
  const clickHandler = () => {
    dispatch({
      type: actionTypes.HANDLE_MODAL_DISPLAY_ON,
    });
  };

  return (
    <nav className={styles.Navigation}>
      <div className={styles.Logo}>
        <a href="/">
          <img height="60px" width="60px" src={img3} alt="" />
        </a>
      </div>
      <div className={styles.NavigationItems}>
        <div className={styles.NavigationItem}>
          <h2 style={{ borderBottom: "none" }}>SHARE</h2>
        </div>
        <div className={styles.NavigationItem} onClick={clickHandler}>
          <h2 style={{ borderBottom: "none" }}>ABOUT</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
