import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.authorInfo}>
          <div className={styles.avatar}></div>
          <span className={styles.username}>Author Username</span>
          <span className={styles.uploadDate}>Video Upload Date</span>
        </div>
        <button className={styles.followButton}>Follow</button>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.videoPlayerSection}>
          <div className={styles.videoPlaceholder}></div>
        </section>

        <section className={styles.reactionButtonsSection}>
          <button className={styles.reactionButton}>Like</button>
          <button className={styles.reactionButton}>Comment</button>
          <button className={styles.reactionButton}>Share</button>
          <button className={styles.reactionButton}>Save</button>
        </section>

        <section className={styles.commentsSection}>
          <div className={styles.commentInput}>
            <input type="text" placeholder="Add a comment..." className={styles.commentInputField} />
            <button className={styles.postCommentButton}>Post</button>
          </div>
          <div className={styles.commentList}>
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
      </main>
    </div>
  );
}
