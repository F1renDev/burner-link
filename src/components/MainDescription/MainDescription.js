import React from "react";
import styles from "./MainDescription.module.css";
import * as actionTypes from "../../store/actions";
import { useDispatch } from "react-redux";

const MainDescription = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({
      type: actionTypes.HANDLE_MODAL_DISPLAY_ON,
    });
  };
  return (
    <div>
      <h1 className={styles.Header}>Send a self-destructing message</h1>
      <div className={styles.Container}>
        <p className={styles.Description}>
          Link Burner lets you share secrets messages. The message is encrypted
          and can be viewed only once by someone with the secure link. Once
          viewed, the message will self-destruct.
        </p>
        <div onClick={clickHandler} className={styles.Link} href="/">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default MainDescription;
