import React from "react";
import Post from "./components/post/Post";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          className="headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Logo"
        ></img>
      </div>
      <Post />
    </div>
  );
}

export default App;
