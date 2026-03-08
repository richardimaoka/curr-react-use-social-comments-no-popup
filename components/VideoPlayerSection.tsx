import React from 'react';
import styles from './VideoPlayerSection.module.css';

const VideoPlayerSection: React.FC = () => {
  return (
    <section className={styles.videoPlayerSection}>
      <video
        className={styles.videoPlayer}
        src="/videos/196860_1280x720.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default VideoPlayerSection;