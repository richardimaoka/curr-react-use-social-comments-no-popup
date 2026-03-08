import { Suspense } from "react";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import HeaderSection from "../components/HeaderSection";
import ReactionButtonsSection from "../components/ReactionButtonsSection";
import VideoPlayerSection from "../components/VideoPlayerSection";
import CommentLoading from "../components/CommentLoading"; // Import new CommentLoading component
import { Comment, fetchComments } from "../lib/comments"; // Import from new file
import styles from "./page.module.css";

export default function Page() {
  const commentsPromise: Promise<Comment[]> = fetchComments();

  return (
    <div className={styles.container}>
      <HeaderSection />

      <main>
        <VideoPlayerSection />
        <ReactionButtonsSection />
        <section className={styles.commentsSection}>
          <CommentInput />
          <Suspense fallback={<CommentLoading />}>
            <CommentList commentsPromise={commentsPromise} />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
