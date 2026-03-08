import React from 'react';
import styles from './CommentSection.module.css';

interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <section className={styles.commentsSection}>
      <div className={styles.commentInput}>
        <input type="text" placeholder="Add a comment..." className={styles.commentInputField} />
        <button className={styles.postCommentButton}>Post</button>
      </div>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentItem}>
            <div className={styles.commenterAvatar}></div>
            <span className={styles.commenterUsername}>{comment.username}</span>
            <p className={styles.commentText}>{comment.text}</p>
            <span className={styles.commentTimestamp}>{comment.timestamp}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;