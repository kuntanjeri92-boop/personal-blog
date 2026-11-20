import { useState } from "react";

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title: title,
      author: author || "Anonymous",
      date: new Date().toLocaleDateString(),
      content: content,
    };

    onAddPost(newPost);
    setTitle("");
    setAuthor("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <h2>Write a New Post</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <textarea
          placeholder="Write your post here..."
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <button type="submit" style={{ padding: "8px 16px" }}>
        Publish Post
      </button>
    </form>
  );
}

export default PostForm;
