function PostItem({ post, onDelete }) {
  return (
    <article style={{ border: "1px solid #ddd", padding: "15px", marginBottom: "15px" }}>
      <h3>{post.title}</h3>
      <small>
        By {post.author} on {post.date}
      </small>
      <p>{post.content}</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </article>
  );
}

export default PostItem;
