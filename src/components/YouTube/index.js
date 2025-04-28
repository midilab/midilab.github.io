import React from "react";
import { TinaField } from 'tinacms';
import styles from "./index.module.css";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className={styles.container}>
      <TinaField name="videoId">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=0&controls=1&showinfo=1&fs=1&wmode=transparent`}
          data-src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=0&controls=1&showinfo=1&fs=1&wmode=transparent`}
          frameBorder="0"
          allowfullscreen=""
          class="tcb-responsive-video"
          data-provider="youtube"
        />
      </TinaField>
    </div>
  );
};

export default YouTubeEmbed;