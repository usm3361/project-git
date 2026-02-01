import readline from "readline";

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Global variables to store fetched posts and API call times
let posts = [];

// Function to display menu
export function displayMenu() {
  console.log("\n=== MENU ===");
  console.log("1. Fetch 10 Posts");
  console.log("2. Display Post Statistics");
  console.log("3. Display API Performance Statistics");
  console.log("4. Exit");
  console.log("============\n");
}

// Helper function to get user input
export function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Option 2: Display post statistics
export function displayPostStatistics() {
  console.log("loading...");
  try {
    if (!posts) {
      console.log("NOT FOUND POSTS");
    } else {
      const countPosts = posts.length;
      console.log(`The count of posts is ${countPosts}`);

      let sum = 0;
      for (let i = 0; i < posts.length; i++) {
        sum += posts.body.length;
      }
      const avarage = sum / posts.length;
      console.log(`The avarage of characters across ${avarage}`);

      let shortTitle = "";
      for (let i = 0; i < posts.length; i++) {
        if (i.title.length < shortTitle) {
          shortTitle = i.title;
        }
      }
      console.log(`The shortest title is: ${shortTitle}`);

      let longTitle = "";
      for (let i = 0; i < posts.length; i++) {
        if (i.title.length > shortTitle) {
          shortTitle = i.title;
        }
      }
      console.log(`The longest title is: ${longTitle}`);

      const numWordsInBodys = posts.map((post) => ({
        lengthPost: post.body.split(" ").length - 1,
        post,
      }));
      const lengthPosts = numWordsInBodys.map((post) => post.lengthPost);
      const maxLength = Math.max(...lengthPosts);
      const postLengthMax = numWordsInBodys.find(
        (post) => post.lengthPost === maxLength,
      );

      console.log(postLengthMax.id);
    }
  } catch (error) {
    console.log(error);
  }
}
