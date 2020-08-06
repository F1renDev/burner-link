import React from "react";
import styles from "./Backdrop.module.css";
import * as actionTypes from "../../store/actions";
import { useDispatch } from "react-redux";

const Backdrop = () => {
  // const shouldDisplay = useSelector(
  //   (state) => state.displayModal,
  //   shallowEqual
  // );
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({
      type: actionTypes.HANDLE_MODAL_DISPLAY_OFF,
    });
  };
  return <div className={styles.Backdrop} onClick={clickHandler}></div>;
};

export default Backdrop;
