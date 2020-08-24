import React from "react";
import "./Post.css";

import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="postHeader">
        <Avatar className="avatar" alt="Yet" src="" />
        <h4>Username</h4>
      </div>
      <img
        className="postImage"
        src="https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg"
      />
      <p className="postText">
        <strong>Username:</strong> caption
      </p>
    </div>
  );
}

export default Post;
