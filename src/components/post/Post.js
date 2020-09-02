import React, { useEffect, useState } from "react";
import "./Post.css";
import { db } from "../../firebase";

import Avatar from "@material-ui/core/Avatar";

function Post({ postId, username, caption, imageUrl }) {
  const [comment, setComments] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
  });

  return (
    <div className="post">
      <div className="postHeader">
        <Avatar className="avatar" alt="Yet" src="" />
        <h4>{username}</h4>
      </div>
      <img className="postImage" src={imageUrl} />
      <p className="postText">
        <strong>{username}:</strong> {caption}
      </p>
    </div>
  );
}

export default Post;
