import React, { useRef } from "react";
import { useState } from "react";
import { memo } from "react";
import styles from "./video_search.module.css";

const VideoSearch = memo(({ onSearch, Home, authService }) => {
  const [user, setUser] = useState(false);

  const btnRef = useRef();
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

  const onLogInOut = () => {
    if (user === true) {
      authService.logout();
      setUser(false);
      btnRef.current.innerText = "Login";
    } else {
      authService.login();
      setUser(true);
      btnRef.current.innerText = "Logout";
    }
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
      {
        <button ref={btnRef} className={styles.logInOut} onClick={onLogInOut}>
          Login
        </button>
      }
    </header>
  );
});

export default VideoSearch;
