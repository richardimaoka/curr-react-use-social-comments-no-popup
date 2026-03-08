import React from 'react';
import styles from './VideoPlayerSection.module.css';

const VideoPlayerSection: React.FC = () => {
  return (
    <section className={styles.videoPlayerSection}>
      <div className={styles.videoPlaceholder}></div>
    </section>
  );
};

export default VideoPlayerSection;