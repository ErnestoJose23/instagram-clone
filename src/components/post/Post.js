import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>

      <img
        className="postImage"
        src="https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg"
      />
      <h4>Username:caption</h4>
    </div>
  );
}

export default Post;
