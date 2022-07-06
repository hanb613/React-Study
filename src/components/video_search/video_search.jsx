import React, { useRef } from "react";
import styles from "./video_search.module.css";

const VideoSearch = ({ onSearch, Home }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const youtubeHome = () => {
    inputRef.current.value = "";
    Home();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={youtubeHome}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="Youtube logo"
        />
        <h2 className={styles.title}>Youtube</h2>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="검색"
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src={process.env.PUBLIC_URL + "/images/search.png"}
        ></img>
      </button>
    </header>
  );
};

export default VideoSearch;
