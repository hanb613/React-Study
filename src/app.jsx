import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
import VideoSearch from "./components/video_search/video_search";

function App({ youtube, authService }) {
  const [videos, setVideos] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const thumbsCheck = useState(false);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  const home = useCallback(() => {
    youtube
      .mostPopular() //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, [youtube]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} Home={home} authService={authService} />

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} check={thumbsCheck} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
