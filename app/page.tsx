import HeaderSection from "../components/HeaderSection";
import ReactionButtonsSection from "../components/ReactionButtonsSection";
import VideoPlayerSection from "../components/VideoPlayerSection";
import CommentInput from "../components/CommentInput"; // New import
import CommentList from "../components/CommentList";   // New import
import styles from "./page.module.css";

// Simulate an asynchronous data fetch
function fetchComments() {
  return new Promise<{ id: string; username: string; text: string; timestamp: string; }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          username: "UserA",
          text: "Great video!",
          timestamp: "5 mins ago",
        },
        {
          id: "2",
          username: "UserB",
          text: "Love the content!",
          timestamp: "10 mins ago",
        },
        {
          id: "3",
          username: "UserC",
          text: "Awesome work!",
          timestamp: "15 mins ago",
        },
      ]);
    }, 2000); // Simulate 2 seconds delay
  });
}

export default function Page() {
  const commentsPromise = fetchComments();

  return (
    <div className={styles.container}>
      <HeaderSection />

      <main>
        <VideoPlayerSection />
        <ReactionButtonsSection />
        <section className={styles.commentsSection}>
          <CommentInput />
          <CommentList commentsPromise={commentsPromise} />
        </section>
      </main>
    </div>
  );
}
