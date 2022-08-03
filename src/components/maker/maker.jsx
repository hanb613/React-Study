import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrUpdateCard = (card) => {
    /*
    const updated = { ...cards };
    updated[card.id] = card;
    setCards(updated);
    */

    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
