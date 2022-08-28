import React, { useState } from "react";
import styles from "./button.module.css";

const Button = ({ authService }) => {
  const [btnName, setBtnName] = useState("Login");

  const onLogInOut = () => {
    if (authService.firebaseAuth.currentUser !== null) {
      authService.logout();
      setBtnName("Login");
    } else {
      authService.login();
      setBtnName("Logout");
    }
  };

  return (
    <button className={styles.button} onClick={onLogInOut}>
      {btnName}
    </button>
  );
};

export default Button;
