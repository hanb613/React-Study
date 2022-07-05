import React from "react";
import styles from "./video_search.module.css";

const VideoSearch = (props) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img
        className={styles.img}
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="Youtube logo"
      />
      <h2 className={styles.title} c>
        Youtube
      </h2>
    </div>
    <input className={styles.input} type="search" placeholder="검색" />
    <button className={styles.button} type="submit">
      <img
        className={styles.buttonImg}
        src={process.env.PUBLIC_URL + "/images/search.png"}
      ></img>
    </button>
  </header>
);

export default VideoSearch;
