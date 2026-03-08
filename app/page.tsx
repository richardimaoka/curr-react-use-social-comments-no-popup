import CommentSection from "../components/CommentSection";
import HeaderSection from "../components/HeaderSection";
import ReactionButtonsSection from "../components/ReactionButtonsSection";
import VideoPlayerSection from "../components/VideoPlayerSection";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <HeaderSection />

      <main>
        <VideoPlayerSection />
        <ReactionButtonsSection />
        <CommentSection />
      </main>
    </div>
  );
}
