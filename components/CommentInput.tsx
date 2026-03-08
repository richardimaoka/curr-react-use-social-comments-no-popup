import React from 'react';
import styles from './CommentInput.module.css';

const CommentInput: React.FC = () => {
  return (
    <div className={styles.commentInput}>
      <input type="text" placeholder="Add a comment..." className={styles.commentInputField} />
      <button className={styles.postCommentButton}>Post</button>
    </div>
  );
};

export default CommentInput;