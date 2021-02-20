import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/*TweetBox */}
      <TweetBox />
      <FlipMove>
        {posts.map((posts) => (
          <Post
            key={posts.text}
            displayName={posts.displayName}
            username={posts.username}
            verified={posts.verified}
            text={posts.text}
            avatar={posts.avatar}
            image={posts.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
