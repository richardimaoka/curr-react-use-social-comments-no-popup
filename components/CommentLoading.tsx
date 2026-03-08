import React from 'react';
import styles from './CommentLoading.module.css';

const CommentLoading: React.FC = () => {
  return (
    <div className={styles.commentLoadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading comments...</p>
    </div>
  );
};

export default CommentLoading;