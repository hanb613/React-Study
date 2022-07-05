import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAnchU5C1ra1ZfEQoBjBq-3QpAolXxUH4Q",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
