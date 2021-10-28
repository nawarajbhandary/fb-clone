import React from "react";
import FeedElement from "./FeedElement";
import "../Style/Feed.css";
import {
  MdOutlinePublic,
  MdLock,
  MdSupervisedUserCircle,
} from "react-icons/md";

function Feed() {
  return (
    <div className="feed__container">
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://avatars.githubusercontent.com/u/10565954?v=4"
          username="Ramesh Syangtan"
          visibilityIcon={<MdOutlinePublic />}
          time="32 m ."
          caption="Life is beautiful"
          image="https://images.unsplash.com/photo-1521579498714-ff08ba4836ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80"
        />
      </div>
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://avatars.githubusercontent.com/u/10565954?v=4"
          username="Ramesh Syangtan"
          visibilityIcon={<MdLock />}
          time="32 m ."
          caption="Life is beautiful"
          image="https://images.unsplash.com/photo-1521579498714-ff08ba4836ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80"
        />
      </div>
      <div className="feed__single">
        <FeedElement
          avatarsrc="https://avatars.githubusercontent.com/u/10565954?v=4"
          username="Ramesh Syangtan"
          visibilityIcon={<MdSupervisedUserCircle />}
          time="32 m ."
          caption="Life is beautiful"
          image="https://images.unsplash.com/photo-1521579498714-ff08ba4836ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80"
        />
      </div>
    </div>
  );
}

export default Feed;
