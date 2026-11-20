import { useState } from "react";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to My Blog",
      author: "Keziah",
      date: "11/20/2026",
      content: "This is my first blog post built with React.",
    },
  ]);

  function addPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <Navbar />
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default App;
