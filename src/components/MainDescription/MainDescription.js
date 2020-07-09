import React from "react";
import styles from "./MainDescription.module.css";

const MainDescription = () => {
  return (
    <div>
      <h1 className={styles.Header}>Send a self-destructing message</h1>
      <div className={styles.Container}>
        <p className={styles.Description}>
          Link Burner lets you share secrets messages. The message is encrypted
          and can be viewed only once by someone with the secure link. Once
          viewed, the message will self-destruct.
        </p>
        <a className={styles.Link} href="/">Learn More</a>
      </div>
    </div>
  );
};

export default MainDescription;
