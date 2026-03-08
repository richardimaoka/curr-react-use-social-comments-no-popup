import styles from "./page.module.css";
import CommentSection from "../components/CommentSection";
import HeaderSection from "../components/HeaderSection";
import VideoPlayerSection from "../components/VideoPlayerSection";
import ReactionButtonsSection from "../components/ReactionButtonsSection";

export default function Page() {
  return (
    <div className={styles.container}>
      <HeaderSection />

      <main className={styles.mainContent}>
        <VideoPlayerSection />

        <ReactionButtonsSection />

        <CommentSection />
      </main>
    </div>
  );
}
