import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigateState = useNavigate().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);

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
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
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
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
