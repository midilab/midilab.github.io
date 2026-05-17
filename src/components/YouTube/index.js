import React from "react";
import styles from "./index.module.css";

const YouTubeEmbed = ({ videoId }) => {
  const parseVideoIdAndParams = (input) => {
    if (!input) return { id: "", params: "" };

    const [idPart, ...paramParts] = input.split("?");
    const paramsString = paramParts.join("&");
    return {
      id: idPart,
      params: paramsString ? `&${paramsString}` : "",
    };
  };

  const { id: cleanVideoId, params: extraParams } =
    parseVideoIdAndParams(videoId);

  const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}?rel=0&modestbranding=0&controls=1&showinfo=1&fs=1&wmode=transparent${extraParams}`;

  return (
    <div className={styles.container}>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        data-src={embedUrl}
        frameBorder="0"
        allowFullScreen
        className="tcb-responsive-video"
        data-provider="youtube"
      />
    </div>
  );
};

export default YouTubeEmbed;