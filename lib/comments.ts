export interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
  avatarSrc: string; // Add avatarSrc to the interface
}

// Simulate an asynchronous data fetch
export function fetchComments(): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          username: "UserA",
          text: "超可愛い❤❤❤やばっ！",
          timestamp: "5 mins ago",
          avatarSrc: "/images/user-avatar1.png", // Assign avatar
        },
        {
          id: "2",
          username: "UserB",
          text: "えーお衣装も似合ってるー❤どこのブランドだろ",
          timestamp: "10 mins ago",
          avatarSrc: "/images/user-avatar2.png", // Assign avatar
        },
        {
          id: "3",
          username: "UserC",
          text: "めっちゃ美味しそうにポテト食べるじゃん！笑！！かわいすぎ！！❤❤♫",
          timestamp: "15 mins ago",
          avatarSrc: "/images/user-avatar3.png", // Assign avatar
        },
      ]);
    }, 2000); // Simulate 2 seconds delay
  });
}
