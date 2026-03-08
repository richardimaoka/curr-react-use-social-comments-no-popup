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
          <div className={styles.commenterAvatar}></div>
          <span className={styles.commenterUsername}>{comment.username}</span>
          <p className={styles.commentText}>{comment.text}</p>
          <span className={styles.commentTimestamp}>{comment.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
