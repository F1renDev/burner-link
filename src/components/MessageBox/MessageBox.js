import React from "react";
import styles from "./MessageBox.module.css";

const MessageBox = () => {
  return (
    <div className={styles.MessageBox}>
      <div className={styles.Container}>
        <div className={styles.Quote}>
          <svg
            width="84"
            height="68"
            viewBox="0 0 84 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ "pointer-events": "none" }}
          >
            <g filter="url(#filter0_d)">
              <path
                d="M61.6002 12L50.8002 12L43.6002 26.4L43.6002 48L65.2002 48L65.2002 26.4L54.4002 26.4L61.6002 12ZM32.8002 12L22.0002 12L14.8002 26.4L14.8002 48L36.4002 48L36.4002 26.4L25.6002 26.4L32.8002 12Z"
                fill="#333333"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0.800293"
                y="0"
                width="82.4"
                height="68"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dx="2" dy="4"></feOffset>
                <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.841667 0 0 0 0 0.290016 0 0 0 0 0.0350695 0 0 0 0.4 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <textarea
          className={styles.Textarea}
          placeholder="Type your message here..."
        ></textarea>
      </div>
    </div>
  );
};

export default MessageBox;
