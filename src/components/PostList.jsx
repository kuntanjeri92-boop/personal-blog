import PostItem from "./PostItem";

function PostList({ posts, onDelete }) {
  if (posts.length === 0) {
    return <p>No blog posts yet.</p>;
  }

  return (
    <div>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default PostList;
