import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  const home = () => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} Home={home} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
