import React from "react";
import styles from "./video_detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const VideoDetail = ({ video, video: { snippet }, video: { statistics } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      title="youtube video player"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title} </h2>
    <div>
      조회수 {Number(statistics.viewCount).toLocaleString("en-US")}회
      <FontAwesomeIcon icon={faThumbsUp} />
      {Number(statistics.likeCount).toLocaleString("en-US") !== "NaN"
        ? Number(statistics.likeCount).toLocaleString("en-US")
        : "좋아요"}
      <FontAwesomeIcon icon={faThumbsDown} />
      <span>
        {Number(statistics.dislikeCount).toLocaleString("en-US") !== "NaN"
          ? Number(statistics.dislikeCount).toLocaleString("en-US")
          : "싫어요"}
      </span>
    </div>

    <h3>{snippet.channelTitle}</h3>

    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
