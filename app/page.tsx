import CommentSection from "../components/CommentSection";
import HeaderSection from "../components/HeaderSection";
import ReactionButtonsSection from "../components/ReactionButtonsSection";
import VideoPlayerSection from "../components/VideoPlayerSection";
import styles from "./page.module.css";

// Simulate an asynchronous data fetch
async function fetchComments() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2 seconds delay
  return [
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
  ];
}

export default async function Page() {
  // Make the Page component async
  const comments = await fetchComments(); // Await the async function

  return (
    <div className={styles.container}>
      <HeaderSection />

      <main>
        <VideoPlayerSection />
        <ReactionButtonsSection />
        <CommentSection comments={comments} />
      </main>
    </div>
  );
}
