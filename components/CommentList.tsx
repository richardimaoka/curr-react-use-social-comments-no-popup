import React from "react";
import { Comment } from "../lib/comments"; // Import Comment interface
import styles from "./CommentList.module.css";

interface CommentListProps {
  commentsPromise: Promise<Comment[]>;
}

const CommentList: React.FC<CommentListProps> = ({ commentsPromise }) => {
  const comments = React.use(commentsPromise);

  return (
    <div className={styles.commentList}>
      {comments.map((comment) => (
                  <div key={comment.id} className={styles.commentItem}>
                    <img src={comment.avatarSrc} alt={`${comment.username}'s avatar`} className={styles.commenterAvatar} />
                    <div className={styles.commentContent}>
                      <div className={styles.commentMeta}>
                        <span className={styles.commenterUsername}>{comment.username}</span>
                        <span className={styles.commentTimestamp}>{comment.timestamp}</span>
                      </div>
                      <p className={styles.commentText}>{comment.text}</p>
                    </div>
                  </div>      ))}
    </div>
  );
};

export default CommentList;
