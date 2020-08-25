import React, { useState } from "react";
import Post from "./components/post/Post";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "James",
      caption: "Wallpaper",
      imageUrl:
        "https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg",
    },
    {
      username: "John",
      caption: "This is a wallpaper ",
      imageUrl:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);
  const posts = [];
  posts.append("");

  return (
    <div className="App">
      <div className="header">
        <img
          className="headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Logo"
        ></img>
      </div>
      <Post
        username="James"
        caption="Wallpaper"
        imageUrl="https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg"
      />
      <Post
        username="John"
        caption="This is a wallpaper "
        imageUrl="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Post
        username="Curtis"
        caption="Hello there!"
        imageUrl="https://i.blogs.es/d24b49/studio-muti-wallpapers/450_1000.jpg"
      />
      <Post
        username="David"
        caption="General Kenobi"
        imageUrl="https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg"
      />
    </div>
  );
}

export default App;
