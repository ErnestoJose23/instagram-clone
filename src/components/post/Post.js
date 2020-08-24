import React from "react";
import "./Post.css";

import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
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
