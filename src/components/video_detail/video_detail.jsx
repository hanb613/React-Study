import React, { useState } from "react";
import styles from "./video_detail.module.css";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

const VideoDetail = ({
  video,
  video: { snippet },
  video: { statistics },
  check,
}) => {
  const [number, setNumber] = useState(Number(statistics.likeCount));
  const [LikeCheck, setLikeCheck] = useState(check[0]);
  const [DisLikeCheck, setDisLikeCheck] = useState(!check[0]);

  const OnThumbsUp = () => {
    if (LikeCheck === false) {
      setNumber((number) => number + 1);
    } else {
      setNumber((number) => number - 1);
    }
    setLikeCheck(!LikeCheck);
    setDisLikeCheck(true);
  };

  const OnThumbsDown = () => {
    if (LikeCheck === true) {
      setNumber((number) => number - 1);
    }

    setDisLikeCheck(!DisLikeCheck);
    setLikeCheck(false);
  };

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
            <button className={styles.thumbsUp} onClick={OnThumbsUp}>
              {LikeCheck ? (
                <FaThumbsUp className={styles.thumbsUpIcon} />
              ) : (
                <FaRegThumbsUp className={styles.thumbsUpIcon} />
              )}

              <span>
                {number.toLocaleString("en-US") !== "NaN"
                  ? number.toLocaleString("en-US")
                  : "좋아요"}
              </span>
            </button>

            <button className={styles.thumbsDown} onClick={OnThumbsDown}>
              {DisLikeCheck ? (
                <FaRegThumbsDown className={styles.thumbsDownIcon} />
              ) : (
                <FaThumbsDown className={styles.thumbsDownIcon} />
              )}
              <span>싫어요</span>
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
