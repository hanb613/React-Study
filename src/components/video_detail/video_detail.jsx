import React, { useState } from "react";
import styles from "./video_detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const VideoDetail = ({ video, video: { snippet }, video: { statistics } }) => {
  return (
    <>
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
        <div className={styles.video_info}>
          조회수 {Number(statistics.viewCount).toLocaleString("en-US")}회
          <div className={styles.thumbs}>
            <button className={styles.thumbsUp}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className={styles.thumbsUpIcon}
              />
              <span>
                {Number(statistics.likeCount).toLocaleString("en-US") !== "NaN"
                  ? Number(statistics.likeCount).toLocaleString("en-US")
                  : "좋아요"}
              </span>
            </button>
            <button className={styles.thumbsDown}>
              <FontAwesomeIcon
                icon={faThumbsDown}
                className={styles.thumbsDownIcon}
              />
              <span>
                {Number(statistics.dislikeCount).toLocaleString("en-US") !==
                "NaN"
                  ? Number(statistics.dislikeCount).toLocaleString("en-US")
                  : "싫어요"}
              </span>
            </button>
          </div>
        </div>

        <h3>{snippet.channelTitle}</h3>

        <pre className={styles.description}>{snippet.description}</pre>
      </section>
    </>
  );
};

export default VideoDetail;
