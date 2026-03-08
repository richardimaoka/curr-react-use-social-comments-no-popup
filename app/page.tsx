import { Suspense } from "react";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import HeaderSection from "../components/HeaderSection";
import ReactionButtonsSection from "../components/ReactionButtonsSection";
import VideoPlayerSection from "../components/VideoPlayerSection";
import { Comment, fetchComments } from "../lib/comments"; // Import from new file
import styles from "./page.module.css";

// A simple loading component for Suspense fallback
function CommentLoading() {
  return <div className={styles.commentLoading}>Loading comments...</div>;
}

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
