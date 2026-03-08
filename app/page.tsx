import styles from "./page.module.css";
import CommentSection from "../components/CommentSection";

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

        <CommentSection />
      </main>
    </div>
  );
}
