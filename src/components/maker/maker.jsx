import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "ABC",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "ABC123@naver.com",
      message: "go for it",
      fileName: "abc",
      fileURL: null,
    },
    {
      id: "2",
      name: "DEF",
      company: "Naver",
      theme: "colorful",
      title: "Software Engineer",
      email: "DEF456@naver.com",
      message: "go for it !",
      fileName: "def",
      fileURL: null,
    },
    {
      id: "3",
      name: "GHI",
      company: "Google",
      theme: "light",
      title: "Software Engineer",
      email: "GHI789@gmail.com",
      message: "go for it !!",
      fileName: "ghi",
      fileURL: null,
    },
  ]);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
