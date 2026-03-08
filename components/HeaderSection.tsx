import React from 'react';
import styles from './HeaderSection.module.css';

const HeaderSection: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.authorInfo}>
        <div className={styles.avatar}></div>
        <span className={styles.username}>Author Username</span>
        <span className={styles.uploadDate}>Video Upload Date</span>
      </div>
      <button className={styles.followButton}>Follow</button>
    </header>
  );
};

export default HeaderSection;