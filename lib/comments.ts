export interface Comment {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

// Simulate an asynchronous data fetch
export function fetchComments(): Promise<Comment[]> {
  return new Promise((resolve) => {
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
