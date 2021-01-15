import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";

const App = () => {
  const [posts, setPosts] = useState([
    {
      username: "yasirghouri",
      imageURL:
        "https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg",
      caption: "I love React",
    },
    {
      username: "osama4-dev",
      imageURL:
        "https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png",
      caption: "I love Angular",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram logo"
          className="app__headerImage"
        />
      </div>
      {posts.map((post, idx) => {
        return (
          <Post
            username={post.username}
            imageURL={post.imageURL}
            caption={post.caption}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default App;
