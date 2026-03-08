import React, { Suspense } from 'react';
import styles from './CommentList.module.css';

interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

interface CommentListProps {
  commentsPromise: Promise<Comment[]>;
}

function CommentLoading() {
  return <div className={styles.commentLoading}>Loading comments...</div>;
}

const CommentList: React.FC<CommentListProps> = ({ commentsPromise }) => {
  const comments = React.use(commentsPromise);

  return (
    <Suspense fallback={<CommentLoading />}>
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
    </Suspense>
  );
};

export default CommentList;