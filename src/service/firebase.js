import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCugj3l17PtgKEFoyDFuV8cMy8sTRi63Q4",
  authDomain: "clone-coding-cead8.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

export const firebaseApp = initializeApp(firebaseConfig);
