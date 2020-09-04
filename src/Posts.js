import React from "react";
import "./App.css";
import Post from "./components/post/Post";

function Posts() {
  return (
    <div className="posts">
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          user={user}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          liked={post.liked}
        />
      ))}
    </div>
  );
}

export default Posts;
