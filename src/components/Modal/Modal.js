import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.Modal}>
      <Backdrop />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.AboutBox}>
          <div className={styles.AboutHeader}>
            <h2>About Burner Link</h2>
          </div>
          <div className={styles.AboutText}>
            <h3>What is this?</h3>
            <p>
              Link Burner allows you to send secure, encrypted messages that
              self-destruct once viewed.
            </p>
            <h3 className={styles.HeaderPadding}>Is this safe to use?</h3>
            <p>
              Yes. The message is encrypted in your browser and you are given a
              link containing the decryption key.
            </p>
            <p>
              The message can be decrypted only by someone with that link, and
              once decrypted, it is permanently destroyed. to.
            </p>
            <p>It is known only to you and the person you send the link</p>
            <h3 className={styles.HeaderPadding}>
              What happens to my message after it is "burned"?
            </h3>
            <p>
              Your message is permanently wiped from server as soon as the
              message is viewed.
            </p>
            <h3 className={styles.HeaderPadding}>Who made this?</h3>
            <p>This app is brought to you by Valentin Maltsev.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
