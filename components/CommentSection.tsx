import React from 'react';
import styles from './CommentSection.module.css';

const CommentSection: React.FC = () => {
  return (
    <section className={styles.commentsSection}>
      <div className={styles.commentInput}>
        <input type="text" placeholder="Add a comment..." className={styles.commentInputField} />
        <button className={styles.postCommentButton}>Post</button>
      </div>
      <div className={styles.commentList}>
        {/* Placeholder for individual comments */}
        <div className={styles.commentItem}>
          <div className={styles.commenterAvatar}></div>
          <span className={styles.commenterUsername}>Commenter 1</span>
          <p className={styles.commentText}>This is a comment.</p>
          <span className={styles.commentTimestamp}>1 hour ago</span>
        </div>
        <div className={styles.commentItem}>
          <div className={styles.commenterAvatar}></div>
          <span className={styles.commenterUsername}>Commenter 2</span>
          <p className={styles.commentText}>Another comment here.</p>
          <span className={styles.commentTimestamp}>30 minutes ago</span>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;