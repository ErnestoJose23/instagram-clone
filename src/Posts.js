import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/post/Post";
import { db, auth } from "./firebase";

function Posts({ user }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

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
